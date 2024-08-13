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
import { toggleRegisterModal } from "@/redux/slice/settings";
import { unmaskPhoneNumber } from "@/utils/funcs";

export default function Register() {
  const router = useRouter();
  const intl = useIntl();
  const { registerModal } = useSelector((state) => state.settings);
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
      name: "",
      phone: "",
      message: "",
      resume: "",
    },
  });

  const submitFn = async (data) => {
    const { name, phone, address, email, password } = data;
    // const formData = new FormData();
    // formData.append("name", data.name);
    // formData.append("phone", data.phone);
    // formData.append("message", data.message);
    // formData.append("type", "membership");
    const unmaskPhone = unmaskPhoneNumber(phone);
    const services =
      individual_services?.length !== 0
        ? individual_services?.map((p, i) => p?.id).join(", ")
        : null;

    const plan_id = Number(localStorage.getItem("plans__duration"));

    const registerData = {
      name,
      phone: `${phone}`,
      email,
      password,
    };

    const orderData = {
      name,
      phone,
      plan_id,
      address,
      services: `${services}`,
    };

    try {
      setReqLoading(true);
      const register = await axios.post("user/register", registerData);
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
        registerModal ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-opacity duration-150`}
      onClick={() => dispatch(toggleRegisterModal())}
    >
      <div
        className={`modal__box bg-nav px-7 xs:px-10 pt-20 pb-10 w-full md:w-[650px] rounded-3xl relative ${
          registerModal ? "scale-100 visible" : "scale-0 invisible"
        } transition-transform duration-200`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-7 right-7 xs:right-10"
          onClick={() => dispatch(toggleRegisterModal())}
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
          <Input
            type={"email"}
            register={register}
            name={"email"}
            placeholder={intl.formatMessage({ id: "emailInput" })}
            id="email"
            required
          />
          <Input
            type={"password"}
            register={register}
            name={"password"}
            placeholder={intl.formatMessage({ id: "passwordInput" })}
            id="password"
            required
          />
          <div className="sm:col-span-2">
            <Textarea
              type={"text"}
              register={register}
              name={"address"}
              placeholder={intl.formatMessage({ id: "locationInput" })}
              id="address"
              required
            />
          </div>
          <div className={`flex sm:col-span-2`}>
            <Button type="submit" isLoading={reqLoading}>
              {intl.formatMessage({ id: "send" })}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
