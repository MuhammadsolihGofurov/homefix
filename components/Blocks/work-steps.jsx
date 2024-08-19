import fetcher from "@/utils/fetcher";
import { useRouter } from "next/router";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { Heading, WorksCard } from "..";
import { useIntl } from "react-intl";

export default function WorkSteps() {
  const router = useRouter();
  const intl = useIntl();

  const { data: data } = useSWR(["process", router.locale], (url) =>
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
    <section className="py-16 sm:py-20 lg:py-[120px]">
      <div className="flex flex-col gap-10 lg:gap-20">
        <div className="container">
          <Heading
            title={intl.formatMessage({ id: "worksStepTitle" })}
            body={intl.formatMessage({ id: "worksStepBody" })}
          />
        </div>
        <div
          className="w-full max-w-[1520px] 8xl:px-0 px-5 mx-auto flex flex-wrap md:flex-nowrap gap-3 lg:gap-4 justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {data?.data?.map((item, index) => (
            <a
              href={item?.link}
              key={index}
              className="block w-full sm:w-[360px] md:h-[300px] lg:h-[400px] 2xl:h-[480px] 6xl:h-[540px] rounded-xl overflow-hidden"
            >
              <img
                className="w-full h-full object-cover"
                src={item?.image}
                alt={item?.link}
                loading="lazy"
                title={item?.link}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
