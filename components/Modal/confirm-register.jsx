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
  toggleRegisterConfirmModal,
  toggleRegisterModal,
} from "@/redux/slice/settings";

export default function ConfirmRegister() {
  const router = useRouter();
  const intl = useIntl();
  const { registerConfirmModal } = useSelector((state) => state.settings);
  const [reqLoading, setReqLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm({
    defaultValues: {
      username: "",
      message: "",
      password: "",
    },
  });

  const submitFn = async (data) => {
    const { code } = data;

    const username = localStorage.getItem("username__local");

    const registerData = {
      username,
      code,
    };

    const orderData = JSON.parse(localStorage.getItem("order__details"));

    try {
      setReqLoading(true);
      const register = await axios.post("user/register/confirm", registerData);
      const order = await axios.post("order", orderData);

      Swal.fire({
        title: intl.formatMessage({ id: "successMembershipTitle" }),
        text: intl.formatMessage({ id: "successMembershipBody" }),
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
      className={`modal fixed w-full h-screen top-0 left-0 z-[1000] bg-modalBg flex items-center justify-center p-5 overflow-y-scroll scroll__hidden ${
        registerConfirmModal ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-opacity duration-150`}
      onClick={() => dispatch(toggleRegisterConfirmModal())}
    >
      <div
        className={`modal__box bg-nav px-7 xs:px-10 pt-20 pb-10 w-full sm:w-[500px] rounded-3xl relative ${
          registerConfirmModal ? "scale-100 visible" : "scale-0 invisible"
        } transition-transform duration-200`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-7 right-7 xs:right-10"
          onClick={() => dispatch(toggleRegisterConfirmModal())}
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
          <p className="text-center text-gray-600">{intl.formatMessage({ id: "smsmessage" })}</p>
          <Input
            type={"code"}
            register={register}
            name={"code"}
            placeholder={intl.formatMessage({ id: "codeInput" })}
            id="code"
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
