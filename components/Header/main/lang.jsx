import { useRouter } from "next/router";
import React from "react";

export default function Lang() {
  const router = useRouter();
  return (
    <div className="flex items-center gap-1 uppercase font-semibold text-primary cursor-pointer relative z-0 group text-sm xs:text-base">
      <span>{router.locale}</span>
      <span>
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L4.5 5L8 1"
            stroke="#222222"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-primary"
          />
        </svg>
      </span>

      {/* languages */}
      <ul className="flex flex-col gap-0 absolute top-full -left-1 bg-main rounded-xl overflow-hidden opacity-0 invisible translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-transform duration-200">
        {router.locales.map((lang, index) => {
          return (
            <li key={index}>
              <a
                locale={lang}
                href={`/${lang}/${router.asPath}`}
                className={`uppercase text-text-primary block py-2 px-3 text-white hover:text-main hover:bg-primary`}
              >
                {lang}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
