import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useIntl } from "react-intl";

export default function Breadcrumbs({ links, title }) {
  const intl = useIntl();
  const router = useRouter();
  return (
    <section className="py-5 sm:py-8">
      <div className="container flex flex-col sm:gap-4 gap-1">
        <ul className="flex flex-row items-center md:gap-5 gap-2">
          <li className="md:hidden block">
            <Link href={`/${router.locale}/`}>
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L1 5L5 9"
                  stroke="#161B21"
                  strokeOpacity="0.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-primary"
                />
              </svg>
            </Link>
          </li>
          <li className="text-primary opacity-50 font-medium">
            <Link href={`/${router.locale}/`}>
              {intl.formatMessage({ id: "home" })}
            </Link>
          </li>
          <li className="md:block hidden">
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 9L5 5L1 1"
                stroke="#161B21"
                strokeOpacity="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-primary"
              />
            </svg>
          </li>
          {links?.map((item, index) => {
            return (
              <li
                key={index}
                className="text-primary font-medium md:block hidden"
              >
                <Link href={`/${router.locale}/${item?.url}`}>
                  {item?.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold sm:uppercase text-primary">
          {title}
        </h1>
      </div>
    </section>
  );
}
