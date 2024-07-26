import fetcher from "@/utils/fetcher";
import { useRouter } from "next/router";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { Heading, WorksCard } from "..";
import { useIntl } from "react-intl";

export default function WhatDoWe() {
  const router = useRouter();
  const intl = useIntl();

  const { data: data } = useSWR(["works", router.locale], (url) =>
    fetcher(url, {
      headers: {
        "Accept-Language": router.locale,
      },
    })
  );

  if (!data?.data || data?.data?.length == 0) {
    return null;
  }

  return (
    <section className="py-14 sm:py-20 lg:py-[120px]">
      <div className="flex flex-col gap-10 lg:gap-20">
        <div className="container">
          <Heading
            title={intl.formatMessage({ id: "worksTitle" })}
            body={intl.formatMessage({ id: "worksBody" })}
          />
        </div>
        <div
          className="w-full max-w-[1520px] 8xl:px-0 sm:px-5 pl-5 mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1.15,
                spaceBetween: 12,
              },
              576: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="mySwiper"
          >
            {data?.data?.map((item, index) => (
              <SwiperSlide key={index}>
                <WorksCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
