import React from "react";
import { Heading, OpinionCard } from "..";
import { useIntl } from "react-intl";
import { SwiperSlide, Swiper } from "swiper/react";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import { Autoplay } from "swiper";

export default function Opinions() {
  const intl = useIntl();
  const router = useRouter();

  const { data: data } = useSWR(["testimonials", router.locale], (url) =>
    fetcher(url, {
      headers: {
        "Accept-Language": router.locale,
      },
    })
  );

  return (
    <section
      id="opinions"
      className="pb-16 sm:py-20 lg:pb-[120px] flex flex-col gap-10 lg:gap-20"
    >
      <div className="container">
        <Heading
          title={intl.formatMessage({ id: "opinionsTitle" })}
          body={intl.formatMessage({ id: "opinionsBody" })}
          swiperPrev
          swiperNext
        />
      </div>
      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1.15,
              spaceBetween: 12,
            },
            576: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1.1,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 2.1,
              spaceBetween: 24,
            },
          }}
          className="opinionsSwiper"
        >
          {data?.data?.map((item, index) => (
            <SwiperSlide key={index}>
              <OpinionCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
