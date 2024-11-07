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
  toggleQuestionModal,
  toggleSendQuestionModal,
} from "@/redux/slice/settings";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";

export default function QuestionModal() {
  const router = useRouter();
  const intl = useIntl();
  const { questionModal } = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);

  const { data: faqs } = useSWR(["question-answer", router.locale], (url) =>
    fetcher(url, {
      headers: {
        "Accept-Language": router.locale,
      },
    })
  );

  const handleTabs = (id) => {
    setActive(active == id ? null : id);
  };

  if (!faqs || faqs?.length == 0) {
    return null;
  }

  return (
    <div
      className={`modal fixed w-full h-screen top-0 left-0 z-[1000] bg-modalBg items-center justify-center p-5 overflow-y-scroll scroll__hidden ${
        questionModal ? "opacity-100 visible z-[100] flex" : "opacity-0 invisible z-[-1] hidden"
      } transition-opacity duration-150`}
      onClick={() => dispatch(toggleQuestionModal())}
    >
      <div
        className={`modal__box bg-nav px-7 xs:px-10 pt-20 pb-10 w-full md:w-[700px] rounded-3xl relative ${
          questionModal ? "scale-100 visible" : "scale-25 invisible"
        } transition-transform duration-200 `}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-7 right-7 xs:right-10"
          onClick={() => dispatch(toggleQuestionModal())}
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

        <div className="w-full flex flex-col items-center justify-center text-center pb-5">
          <h3 className="font-semibold text-lg">
            {intl.formatMessage({ id: "questionTitle" })}
          </h3>
          <p className="text-secondary">
            {" "}
            {intl.formatMessage({ id: "questionModalBody" })}{" "}
            <button
              type="button"
              className="text-main underline"
              onClick={() => {
                dispatch(toggleSendQuestionModal());
                dispatch(toggleQuestionModal());
              }}
            >
              {intl.formatMessage({ id: "questionModalButton" })}
            </button>
          </p>
        </div>

        <div className="h-[320px] overflow-y-scroll pr-2 flex flex-col gap-3 modal__questions">
          {faqs?.data?.map((item, index) => {
            return (
              <div
                className="flex flex-col gap-1"
                key={index}
                data-aos="fade-up"
              >
                <button
                  type="button"
                  className={`w-full flex flex-row items-center justify-between bg-adv-bg-2 backdrop-blur-[10px] py-5 px-5 ${
                    active == index ? "rounded-t-xl" : "rounded-xl"
                  } text-primary`}
                  onClick={() => handleTabs(index)}
                >
                  <span className="font-semibold text-base text-start">
                    {item?.question}
                  </span>
                  <span>
                    <svg
                      width="19"
                      height="10"
                      viewBox="0 0 19 10"
                      fill="none"
                      className={`${
                        active == index ? "rotate-180" : "rotate-0"
                      } transition-transform duration-300`}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L9.5 9L18 1"
                        stroke="#222"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`px-5 sm:px-9 py-7 bg-adv-bg-2 backdrop-blur-[10px] rounded-xl text-primary ${
                    active == index
                      ? "opacity-100 visible h-auto flex"
                      : "opacity-0 invisible h-0 hidden"
                  }`}
                >
                  <p className="font-normal text-sm sm:text-base leading-4 sm:leading-5">
                    {item?.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
