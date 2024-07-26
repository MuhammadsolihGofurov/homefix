import React from "react";

export default function AdvCard({ data, index }) {
  return (
    <div
      className="bg-adv-bg-1 px-3 sm:px-5 py-5 sm:py-10 rounded-2xl flex gap-5 items-center"
      data-aos="zoom-in"
      data-aos-delay={index * 100}
    >
      <div className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] p-5 sm:p-0 rounded-full bg-adv-bg-2 flex items-center justify-center">
        <img
          src={data?.icon}
          alt={data?.title}
          loading="lazy"
          title={data?.title}
        />
      </div>
      <div className="flex-1 flex flex-col gap-2 text-primary justify-center">
        <h5 className="font-semibold text-base sm:text-lg">{data?.title}</h5>
        <p className="font-medium text-sm sm:text-base opacity-50">
          {data?.description}
        </p>
      </div>
    </div>
  );
}
