import React from "react";
import { AdvCard, Heading } from "..";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import Button from "../Button/main-button";
import Link from "next/link";
import Results from "./results";

export default function AboutSection({ page = "home" }) {
  const intl = useIntl();
  const { settings } = useSelector((state) => state.settings);
  const router = useRouter();
  const { data: adv } = useSWR(["advantages", router.locale], (url) =>
    fetcher(url, {
      headers: {
        "Accept-Language": router.locale,
      },
    })
  );
  const isHome = page == "home";

  return (
    <div
      id="about"
      className={`${
        page == "home" ? "pb-16 sm:py-20 lg:py-[120px]" : "pb-14 sm:pb-20"
      }`}
    >
      <div className="container flex flex-col gap-7 sm:gap-14 items-start">
        {isHome ? (
          <Heading
            title={intl.formatMessage({ id: "aboutTitle" })}
            body={intl.formatMessage({ id: "aboutBody" })}
          />
        ) : (
          <></>
        )}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className={`text-text-50 text-base sm:text-lg leading-5 sm:leading-6 ${
            isHome ? "line-clamp-5" : ""
          }`}
          dangerouslySetInnerHTML={{
            __html: settings?.about_description,
          }}
        ></div>
        {/* advantages */}
        {!isHome ? (
          <>
            <Results type={"about"} />
            <div
              className="w-full sm:w-10/12 mx-auto flex items-center justify-center h-[320px] sm:h-[400px] md:h-[640px] rounded-3xl bg-cover bg-center"
              data-fancybox="about"
              href={settings?.about_video_url}
              style={{
                backgroundImage: `url(${settings?.about_video_bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <button className="bg-white w-[80px] sm:w-[120px] h-[80px] sm:h-[120px] rounded-full flex items-center justify-center pl-2 relative z-0 after:sm:w-[140px] after:sm:h-[140px] after:w-[100px] after:h-[100px] after:bg-white after:opacity-50 after:absolute after:sm:-top-[8%] after:sm:-left-[8%] after:-top-[12%] after:-left-[12%] after:rounded-full after:animate-ping">
                <svg
                  width="34"
                  height="42"
                  viewBox="0 0 34 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[24px] h-[32px] sm:w-[34px] sm:h-[42px]"
                >
                  <path
                    d="M0 3.40206V38.5979C0 41.2818 2.91572 42.9125 5.16116 41.4517L32.4416 23.8537C34.5195 22.5288 34.5195 19.4712 32.4416 18.1123L5.16116 0.548337C2.91572 -0.912496 0 0.718202 0 3.40206Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
            <div className="pt-10 sm:pt-20">
              <Heading
                title={intl.formatMessage({ id: "advTitle" })}
                body={intl.formatMessage({ id: "advBody" })}
              />
            </div>
          </>
        ) : (
          <></>
        )}
        {adv?.data ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
            {adv?.data?.map((item, index) => (
              <AdvCard key={index} data={item} index={index} />
            ))}
          </div>
        ) : (
          <></>
        )}
        {isHome ? (
          <Link href={`/${router.locale}/about`}>
            <Button data-aos="fade-up" data-aos-delay="100">
              {intl.formatMessage({ id: "aboutMore" })}
            </Button>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
