import React from "react";
import Button from "../Button/main-button";

export default function Heading({
  title,
  body,
  type = "start",
  button,
  link,
  swiperNext,
  swiperPrev,
  swiper,
}) {
  return (
    <div
      className={`flex flex-row gap-2 ${
        type == "center"
          ? "justify-center items-center text-center"
          : "items-center justify-between"
      }`}
    >
      <div className="flex flex-col gap-0 sm:gap-2">
        <p
          className="text-second_heading uppercase font-bold text-sm sm:text-lg 2xl:text-xl leading-5"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {body}
        </p>
        <h1
          className="text-primary uppercase font-extrabold text-xl sm:text-3xl 2xl:text-5xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {title}
        </h1>
      </div>
      {type == "button" ? (
        <a href={link} className="lg:block hidden" data-aos="fade-up">
          <Button>{button}</Button>
        </a>
      ) : (
        <></>
      )}
      {swiper ? (
        <div className="md:flex hidden items-center gap-4">
          <button
            type="button"
            onClick={() => swiperPrev()}
            className="w-[60px] h-[60px] rounded-full bg-main flex items-center justify-center border-2 border-main hover:bg-white group"
          >
            <svg
              width="10"
              height="19"
              viewBox="0 0 10 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1L0.999999 9.5L9 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-main"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => swiperNext()}
            className="w-[60px] h-[60px] rounded-full bg-main flex items-center justify-center border-2 border-main hover:bg-white group"
          >
            <svg
              width="10"
              height="19"
              viewBox="0 0 10 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 18L9 9.5L1 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:stroke-main"
              />
            </svg>
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
