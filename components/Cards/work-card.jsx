import React from "react";

export default function WorksCard({ data }) {
  return (
    <div
      className="flex flex-col gap-4 items-start justify-end h-[360px] sm:h-[420px] lg:h-[580px] rounded-3xl overflow-hidden p-5 lg:p-8 text-white relative z-0 cursor-pointer group"
      style={{
        background: `linear-gradient(227.79deg, rgba(38, 189, 190, 0) 0%, #26BDBE 100%), url(${data?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-[85%] left-0 p-5 group-hover:top-auto group-hover:bottom-0 transition-all duration-200">
        <h4 className="text-lg md:text-2xl font-bold">{data?.title}</h4>
        <p className="text-sm sm:text-base font-medium leading-5 opacity-0 translate-y-[150px] group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-300">
          {data?.description}
        </p>
      </div>
    </div>
  );
}
