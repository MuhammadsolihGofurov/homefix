import React from "react";
import { useDispatch } from "react-redux";
import { toggleQuestionModal } from "@/redux/slice/settings";

export default function QuestionShape() {
  const dispatch = useDispatch();
  return (
    <button
      className="fixed bottom-10 right-10 w-14 h-14 bg-[#1d8282] rounded-full flex items-center justify-center after:w-20 after:h-20 after:absolute after:-top-3 after:-left-3 after:rounded-full after:bg-main after:opacity-50 after:z-[-1] after:animate-ping"
      onClick={() => dispatch(toggleQuestionModal())}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" animate-bounce"
      >
        <path
          d="M18 4H17V12C17 12.55 16.55 13 16 13H4V14C4 15.1 4.9 16 6 16H16L20 20V6C20 4.9 19.1 4 18 4ZM15 9V2C15 0.9 14.1 0 13 0H2C0.9 0 0 0.9 0 2V15L4 11H13C14.1 11 15 10.1 15 9Z"
          fill="#fff"
        />
      </svg>
    </button>
  );
}
