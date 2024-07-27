import React from "react";
import Button from "../Button/main-button";

export default function Heading({ title, body, type = "start", button, link }) {
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
        <h3
          className="text-primary uppercase font-extrabold text-xl sm:text-3xl 2xl:text-5xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {title}
        </h3>
      </div>
      {type == "button" ? (
        <a href={link} className="lg:block hidden" data-aos="fade-up">
          <Button>{button}</Button>
        </a>
      ) : (
        <></>
      )}
    </div>
  );
}
