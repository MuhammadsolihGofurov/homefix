import fetcher from "@/utils/fetcher";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper";
import Results from "../Blocks/results";

export default function HomeBanner() {
  const router = useRouter();

  const { data: data } = useSWR(["banners", router.locale], (url) =>
    fetcher(url, {
      headers: {
        "Accept-Language": router.locale,
      },
    })
  );

  return (
    <section className="banners relative z-0">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
        }}
        className="mySwiper"
      >
        {data?.data?.map((item, index) => {
          return (
            <SwiperSlide key={index} className="w-full">
              <div
                className="min-h-screen w-full flex items-center justify-center pb-[100px] pt-[140px]"
                style={{
                  background: `linear-gradient(0deg, rgba(38, 189, 190, 0.6), rgba(38, 189, 190, 0.6)), url(${item?.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="container">
                  <div className="flex flex-col gap-7 sm:gap-12 w-full lg:w-4/6">
                    <h1 className="banner__title text-2xl sm:text-4xl lg:text-6xl leading-7 sm:leading-10 lg:leading-[72px] text-white font-extrabold uppercase">
                      {item?.title}
                    </h1>
                    <p className="banner__body text-white text-base sm:text-xl leading-5 sm:leading-7 lg:w-5/6">
                      {item?.description}
                    </p>
                    <Results color={"text-white"} type="home" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        {/* pagination bg */}
        <div className="sm:bg-nav w-[240px] h-[56px] absolute bottom-0 left-2/4 z-10 -translate-x-2/4 rounded-tl-2xl rounded-tr-2xl">
          <span className="absolute bottom-0 -left-10 z-10 sm:block hidden">
            <svg
              width="40"
              height="48"
              viewBox="0 0 40 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 48V0C40 34.207 22.0914 48 0 48H40Z"
                fill="#F4FFFF"
                className="fill-nav"
              />
            </svg>
          </span>
          <span className="absolute bottom-0 -right-10 z-10 sm:block hidden">
            <svg
              width="40"
              height="48"
              viewBox="0 0 40 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-2.09815e-06 48L40 48C17.9086 48 -1.49519e-06 34.206 0 -1.74846e-06L-2.09815e-06 48Z"
                fill="#F4FFFF"
                className="fill-nav"
              />
            </svg>
          </span>
        </div>
      </Swiper>
    </section>
  );
}
