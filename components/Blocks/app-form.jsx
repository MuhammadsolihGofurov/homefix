import axios from "@/utils/axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { Input } from "..";
import Textarea from "../custom/textarea";
import File from "../custom/file";
import Button from "../Button/main-button";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function AppForm({ page }) {
  const router = useRouter();
  const intl = useIntl();
  const [reqLoading, setReqLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      message: "",
      resume: "",
    },
  });

  const submitFn = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("phone", data.phone);
    formData.append("message", data.message);
    formData.append("type", page);
    if (data.resume[0] && page == "career") {
      formData.append("resume", data.resume[0]);
    }

    try {
      setReqLoading(true);
      const response = await axios.post("application", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Swal.fire({
        title: intl.formatMessage({ id: "successResumeTitle" }),
        text: intl.formatMessage({ id: "successResumeBody" }),
        icon: "success",
        showCancelButton: false,
        showCloseButton: false,
        showConfirmButton: false,
      });

      setTimeout(() => {
        router.reload();
      }, 2000);
      reset();
    } catch (e) {
      setTimeout(() => {
        Swal.fire({
          title: "Error",
          text: e.message,
          icon: "error",
          showCancelButton: false,
          showCloseButton: false,
          showConfirmButton: false,
        });
      }, 1500);
    } finally {
      setReqLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitFn)}
      id="form"
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5"
    >
      <Input
        type={"text"}
        register={register}
        name={"name"}
        placeholder={intl.formatMessage({ id: "nameInput" })}
        id="name"
        required
      />
      <Input
        type={"tel"}
        register={register}
        name={"phone"}
        placeholder={intl.formatMessage({ id: "phoneInput" })}
        id="phone"
        required
      />
      <div className="sm:col-span-2">
        <Textarea
          type={"text"}
          register={register}
          name={"message"}
          placeholder={intl.formatMessage({ id: "messageInput" })}
          id="message"
          required
        />
      </div>
      {page == "career" ? (
        <div className="sm:col-span-2">
          <File
            type={"text"}
            register={register}
            name={"resume"}
            placeholder={intl.formatMessage({ id: "messageInput" })}
            id="resume"
          />
        </div>
      ) : (
        <></>
      )}
      <div
        className={`flex  sm:col-span-2 ${
          page == "contact" ? "justify-end" : ""
        }`}
      >
        <Button type="submit" isLoading={reqLoading}>
          {intl.formatMessage({ id: "send" })}
        </Button>
      </div>
    </form>
  );
}
