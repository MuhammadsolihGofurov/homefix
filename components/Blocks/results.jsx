import React from "react";
import { useSelector } from "react-redux";

export default function Results({ color, type }) {
  const { results } = useSelector((state) => state.settings);

  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-4 banner__results ${
        type == "home" ? "gap-5 sm:gap-9" : "gap-10"
      } ${color}`}
    >
      {results?.map((item, index) => {
        return (
          <div
            key={index}
            className={`pr-9 border-r-[1px] sm:border-r-[#ffffff46] flex items-center text-center justify-center flex-col gap-1  ${
              index % 2 !== 0 ? "border-transparent" : "border-r-[#ffffff46]"
            } last:border-none`}
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
