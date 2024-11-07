import axios from "@/utils/axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { Input } from "..";
import Textarea from "../custom/textarea";
import Button from "../Button/main-button";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSendQuestionModal,
} from "@/redux/slice/settings";

export default function SendQuestionModal() {
  const router = useRouter();
  const intl = useIntl();
  const { sendQuestionModal } = useSelector((state) => state.settings);
  const [reqLoading, setReqLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const dispatch = useDispatch();
  const { individual_services } = useSelector((state) => state.settings);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm({
    defaultValues: {
      question: "",
      phone: "",
    },
  });

  const submitFn = async (data) => {
    const { question, phone } = data;

    const registerData = {
      phone,
      question,
    };

    try {
      setReqLoading(true);
      const question = await axios.post("send/question", registerData);
      Swal.fire({
        title: intl.formatMessage({ id: "successQuestionTitle" }),
        text: intl.formatMessage({ id: "successQuestionBody" }),
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
        console.error(e);
        Swal.fire({
          title: "Error",
          text: e?.response?.data?.reason || e.message,
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
    <div
      className={`modal fixed w-full h-screen top-0 left-0 z-[1000] bg-modalBg items-center justify-center p-5 overflow-y-scroll scroll__hidden ${
        sendQuestionModal ? "opacity-100 visible z-[100] flex" : "opacity-0 invisible z-[-1] hidden"
      } transition-opacity duration-150`}
      onClick={() => dispatch(toggleSendQuestionModal())}
    >
      <div
        className={`modal__box bg-nav px-7 xs:px-10 pt-20 pb-10 w-full sm:w-[500px] rounded-3xl relative ${
          sendQuestionModal ? "scale-100 visible" : "scale-0 invisible"
        } transition-transform duration-200`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-7 right-7 xs:right-10"
          onClick={() => dispatch(toggleSendQuestionModal())}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4242 1.08484L1.42419 13.0848"
              stroke="#242424"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-primary"
            />
            <path
              d="M1.42419 1.08484L13.4242 13.0848"
              stroke="#242424"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-primary"
            />
          </svg>
        </button>

        <form
          onSubmit={handleSubmit(submitFn)}
          id="modal__register"
          className="grid grid-cols-1 gap-2 sm:gap-3"
        >
          <Input
            type={"tel"}
            register={register}
            name={"phone"}
            placeholder={intl.formatMessage({ id: "phoneInput" })}
            id="phone"
            required
          />
          {/* <Input
            type={"email"}
            register={register}
            name={"email"}
            placeholder={intl.formatMessage({ id: "emailInput" })}
            id="email"
            required
          /> */}
          {/* <Input
            type={"password"}
            register={register}
            name={"password"}
            placeholder={intl.formatMessage({ id: "passwordInput" })}
            id="password"
            required
          /> */}
          <Textarea
            type={"text"}
            register={register}
            name={"question"}
            placeholder={intl.formatMessage({ id: "questionInput" })}
            id="question"
            required
          />
          {/* <div className={`flex sm:col-span-2`}> */}
          <Button type="submit" isLoading={reqLoading}>
            {intl.formatMessage({ id: "send" })}
          </Button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
}
