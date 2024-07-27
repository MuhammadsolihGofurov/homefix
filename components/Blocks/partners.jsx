import React, { useState } from "react";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import { Heading } from "..";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper";

export default function FAQ() {
  const intl = useIntl();
  const router = useRouter();

  const { data: data } = useSWR(["partners", router.locale], (url) =>
    fetcher(url, {
      headers: {
        "Accept-Language": router.locale,
      },
    })
  );

  if (!data || data?.length == 0) {
    return null;
  }

  return (
    <section id="faq" className="pb-16 sm:py-20 lg:pb-[120px] relative z-[1]">
      <div className="container flex flex-col gap-10 lg:gap-20">
        <Heading
          title={intl.formatMessage({ id: "partnersTitle" })}
          body={intl.formatMessage({ id: "partnersBody" })}
          type="center"
        />
        <div className="w-full" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              576: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 24,
              },
            }}
            className="partnersSwiper"
          >
            {data?.data?.map((item, index) => (
              <SwiperSlide key={index}>
                <a
                  href={item?.link}
                  className="opacity-50 hover:opacity-100 transition-opacity duration-150 flex items-center justify-center p-2 text-center"
                >
                  <img
                    src={item?.icon}
                    alt={item?.name}
                    title={item?.name}
                    loading="lazy"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
