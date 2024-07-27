import React, { useState } from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import { Heading } from "..";

export default function FAQ() {
  const intl = useIntl();
  const router = useRouter();
  const [active, setActive] = useState(0);

  const { data: faqs } = useSWR(["faqs", router.locale], (url) =>
    fetcher(url, {
      headers: {
        "Accept-Language": router.locale,
      },
    })
  );

  const handleTabs = (id) => {
    setActive(active == id ? null : id);
  };

  if (!faqs || faqs?.length == 0) {
    return null;
  }

  return (
    <section id="faq" className="pb-16 sm:py-20 lg:pb-[120px] relative z-[1]">
      <div className="container flex flex-col gap-10 lg:gap-20">
        <Heading
          title={intl.formatMessage({ id: "faqTitle" })}
          body={intl.formatMessage({ id: "faqBody" })}
          type="center"
        />
        <div className="w-full 2xl:w-3/5 flex flex-col gap-5 mx-auto">
          {faqs?.data?.map((item, index) => {
            return (
              <div
                className="flex flex-col gap-1"
                key={index}
                data-aos="fade-up"
              >
                <button
                  type="button"
                  className={`w-full flex flex-row items-center justify-between bg-adv-bg-2 backdrop-blur-[10px] py-7 px-5 sm:px-9 ${
                    active == index ? "rounded-t-xl" : "rounded-xl"
                  } text-primary`}
                  onClick={() => handleTabs(index)}
                >
                  <span className="font-semibold text-base text-start">
                    {item?.question}
                  </span>
                  <span>
                    <svg
                      width="19"
                      height="10"
                      viewBox="0 0 19 10"
                      fill="none"
                      className={`${
                        active == index ? "rotate-180" : "rotate-0"
                      } transition-transform duration-300`}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L9.5 9L18 1"
                        stroke="#222"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`px-5 sm:px-9 py-7 bg-adv-bg-2 backdrop-blur-[10px] rounded-xl text-primary ${
                    active == index
                      ? "opacity-100 visible h-auto flex"
                      : "opacity-0 invisible h-0 hidden"
                  }`}
                >
                  <p className="font-normal text-sm sm:text-base leading-4 sm:leading-5">
                    {item?.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
