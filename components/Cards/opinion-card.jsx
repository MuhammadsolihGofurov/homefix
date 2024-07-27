import React from "react";

export default function OpinionCard({ data }) {
  return (
    <div
      className="flex flex-row items-center gap-5 bg-box rounded-xl px-6 py-10 relative z-0 "
      style={{ boxShadow: `0px 0px 14px rgba(223, 223, 223, .3)` }}
    >
      <div className="w-[120px] lg:w-[200px] h-[120px] lg:h-[200px] rounded-full relative z-0 sm:block hidden">
        <img
          src={data?.image}
          alt={data?.title}
          title={data?.title}
          loading="lazy"
          className="h-[120px] lg:w-[200px] w-[120px] lg:h-[200px] rounded-full"
        />
        <button type="button" className="absolute bottom-0 right-0">
          <svg
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[24px] h-[24px] sm:w-[48px] sm:h-[48px]"
          >
            <circle cx="24.5" cy="24" r="24" fill="#26BDBE" />
            <path
              d="M19.5 16.7047C19.5 15.1139 21.2673 14.1598 22.5973 15.0326L32.952 21.8279C34.1556 22.6178 34.1556 24.3822 32.952 25.1721L22.5973 31.9674C21.2673 32.8402 19.5 31.8861 19.5 30.2953V16.7047Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-5 flex-1">
        <div className="flex flex-col gap-1">
          <div className="w-[56px] sm:w-[120px] lg:w-[200px] h-[56px] sm:h-[120px] lg:h-[200px] rounded-full relative z-0 sm:hidden block">
            <img
              src={data?.image}
              alt={data?.title}
              title={data?.title}
              loading="lazy"
              className="h-[120px] lg:w-[200px] w-[120px] lg:h-[200px] rounded-full"
            />
          </div>
          <h5 className="text-primary font-semibold">{data?.name}</h5>
          <div className="flex gap-1">
            {Array.from({ length: data?.rate }).map((item, index) => {
              return (
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  key={index}
                >
                  <path
                    d="M7.5 1.5L9.5085 5.77865L14 6.46898L10.75 9.79758L11.517 14.5L7.5 12.2787L3.483 14.5L4.25 9.79758L1 6.46898L5.4915 5.77865L7.5 1.5Z"
                    fill="#FFEC3F"
                    stroke="#FFEC3F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              );
            })}
          </div>
        </div>
        <p className="text-sm text-primary opacity-70">{data?.description}</p>
      </div>
    </div>
  );
}
