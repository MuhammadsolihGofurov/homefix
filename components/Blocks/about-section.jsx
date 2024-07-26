import React from "react";
import { AdvCard, Heading } from "..";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import Button from "../Button/main-button";
import Link from "next/link";

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
    <section
      id="about"
      className={`${
        page == "home" ? "pb-14 sm:py-20 lg:py-[120px]" : "pb-14 sm:pb-20"
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
          className="text-text-50 text-base sm:text-lg leading-5 sm:leading-6"
          dangerouslySetInnerHTML={{
            __html: settings?.about_description,
          }}
        ></div>
        {/* advantages */}
        {!isHome ? (
          <Heading
            title={intl.formatMessage({ id: "advTitle" })}
            body={intl.formatMessage({ id: "advBody" })}
          />
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
    </section>
  );
}
