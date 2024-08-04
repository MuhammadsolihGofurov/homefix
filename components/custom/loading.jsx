import React from "react";

export default function Loading({ isloading }) {
  return (
    <div
      className={`flex justify-center items-center h-screen transition-opacity duration-150 bg-main z-[1000] fixed top-0 left-0 w-full ${
        isloading ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-primary animate-bounce"></div>
        <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-primary animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
}
