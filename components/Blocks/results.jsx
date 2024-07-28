import React from "react";
import { useSelector } from "react-redux";

export default function Results({ color, type }) {
  const { results } = useSelector((state) => state.settings);

  return (
    <div
      className={`grid  w-full ${
        type == "home"
          ? "gap-5 sm:gap-9 text-white banner__results grid-cols-2 sm:grid-cols-4"
          : "gap-10 sm:gap-10 text-primary justify-center sm:py-10 grid-cols-1 sm:grid-cols-4"
      }`}
    >
      {results?.map((item, index) => {
        return (
          <div
            key={index}
            className={` flex items-center text-center justify-center flex-col gap-1  ${
              index % 2 !== 0 ? "border-transparent" : "border-r-[#ffffff46]"
            } last:border-none ${
              type == "home"
                ? "border-r-[1px] sm:border-r-[#ffffff46] pr-9 "
                : "text-primary border-r-[1px] sm:border-r-secondary sm:pr-9"
            }`}
          >
            <h2 className="text-2xl sm:text-4xl font-semibold">
              {item?.count}
            </h2>
            <p className="text-sm sm:text-base font-medium">{item?.name}</p>
          </div>
        );
      })}
    </div>
  );
}
