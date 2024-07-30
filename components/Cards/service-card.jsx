import { useRouter } from "next/router";
import React from "react";

export default function ServiceCard({ data }) {
  const router = useRouter();
  return (
    <a
      href={`/${router.locale}/service/${data?.id}`}
      className="h-[360px] rounded-xl bg-cover bg-center relative z-0 after:bg-black after:opacity-40 after:absolute after:top-0 after:left-0 after:w-full after:h-full overflow-hidden after:-z-10 p-5 flex flex-col justify-end group hover:after:bg-main"
      style={{ backgroundImage: `url(${data?.image})` }}
    >
      <span className="text-white font-semibold text-xl group-hover:opacity-0 transition-opacity duration-150">
        {data?.title}
      </span>
      <span className="absolute top-0 left-2/4 -translate-x-2/4 -translate-y-2/4 z-10 opacity-0 group-hover:top-2/4 group-hover:opacity-100 transition-all duration-400">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.75"
            y="0.75"
            width="34.5"
            height="34.5"
            rx="17.25"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M11 18H25"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 11L25 18L18 25"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
