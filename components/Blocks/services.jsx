import React from "react";
import { Heading } from "..";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import Link from "next/link";

export default function Services() {
  const intl = useIntl();
  const router = useRouter();

  const { data: services } = useSWR(["services", router.locale], (url) =>
    fetcher(url, {
      headers: {
        "Accept-Language": router.locale,
      },
    })
  );

  if (!services?.data || services?.data?.length == 0) {
    return null;
  }

  return (
    <section
      id="services"
      className="pb-16 sm:py-20 lg:py-[120px] flex flex-col gap-10 lg:gap-20"
    >
      <div className="container">
        <Heading
          title={intl.formatMessage({ id: "servicesTitle" })}
          body={intl.formatMessage({ id: "servicesBody" })}
          type="button"
          button={intl.formatMessage({ id: "servicesButton" })}
          link={`/${router.locale}/services`}
        />
      </div>
      <div
        className="flex gap-0 min-h-[400px] sm:min-h-[600px] lg:min-h-[720px]"
        data-aos="fade-up"
      >
        {services?.data?.slice(0, 5).map((item, index) => {
          return (
            <a
              href={`/${router.locale}/service/${item?.id}`}
              key={item?.title}
              className={`flex-1 h-[400px] sm:h-[600px] lg:h-[720px] p-5 ${
                index % 2 !== 0 ? "md:flex hidden" : "flex"
              } items-center justify-center text-center hover:flex-[2]  cursor-pointer service__bg relative z-0 group hover:flex-col hover:justify-end hover:items-start hover:text-start`}
              style={{
                background: `url(${item?.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h4 className="[writing-mode:vertical-lr] rotate-180 text-lg sm:text-2xl lg:text-3xl text-white font-semibold sm:font-extrabold group-hover:rotate-0 group-hover:[writing-mode:horizontal-tb] group-hover:text-base group-hover:sm:text-lg">
                {item?.title}
              </h4>
              <div className="gap-2 items-center group-hover:sm:flex hidden text-white">
                <span>{intl.formatMessage({ id: "serviceItemMore" })}</span>
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7L4 4L1 1"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          );
        })}
        <a
          href={`/${router.locale}/services`}
          className="flex-1 h-[400px] sm:h-[600px] lg:h-[720px] p-5 flex items-center justify-center text-center hover:flex-[2]  cursor-pointer service__bg relative z-0 group gap-3 hover:justify-end hover:items-start flex-col"
          style={{
            background: `url(/images/banner.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <svg
            width="60"
            height="61"
            viewBox="0 0 60 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[24px] h-[24px] sm:w-[60px] sm:h-[60px]"
          >
            <rect
              x="1.5"
              y="2"
              width="57"
              height="57"
              rx="28.5"
              stroke="white"
              strokeWidth="3"
            />
            <path
              d="M23 30.5H37"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30 23.5L37 30.5L30 37.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h4 className="text-base lg:text-lg text-white font-semibold sm:font-extrabold md:[writing-mode:horizontal-tb] [writing-mode:vertical-lr] md:rotate-0 rotate-180">
            {intl.formatMessage({ id: "servicesButton" })}
          </h4>
        </a>
      </div>
    </section>
  );
}
