import axios from "@/utils/axios";
import React from "react";
import Seo from "@/components/Seo/Seo";
import { Breadcrumbs } from "@/components";

function page({ info }) {
  return (
    <>
      <Seo
        title={info?.data?.seo_title}
        description={info?.data?.seo_description}
        keywords={info?.data?.seo_keywords}
      />
      <main className="pt-20 sm:pt-[100px]">
        <Breadcrumbs
          links={[
            {
              id: 1,
              name: info?.data?.title,
              url: `service/${info?.data?.id}`,
            },
          ]}
          title={info?.data?.title}
        />
        <section className="container">
          <div className="flex flex-col gap-10 lg:gap-16 pb-20 lg:pb-[120px]">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className={`text-text-50 text-base sm:text-lg leading-5 sm:leading-6`}
              dangerouslySetInnerHTML={{
                __html: info?.data?.description,
              }}
            ></div>
            <div
              className="flex flex-col gap-7 sm:pl-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {info?.data?.advantages?.map((item, index) => {
                return (
                  <div
                    className="flex items-center gap-3 font-semibold text-primary"
                    key={item?.title}
                  >
                    <span>
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_84_402)">
                          <path
                            d="M19.173 9.15453V9.99998C19.1719 11.9604 18.5343 13.8679 17.3554 15.438C16.1765 17.0081 14.5195 18.1568 12.6313 18.7126C10.7432 19.2685 8.72526 19.2017 6.87837 18.5223C5.03147 17.843 3.45462 16.5873 2.38299 14.9428C1.31135 13.2982 0.802353 11.3528 0.931901 9.39663C1.06145 7.44049 1.8226 5.57846 3.10184 4.08823C4.38108 2.598 6.10987 1.55942 8.03037 1.12739C9.95087 0.695355 11.9602 0.893016 13.7586 1.69089"
                            stroke="#26BDBE"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M20.0853 1.81818L10.0419 11.8182L7.30273 9.0909"
                            stroke="#26BDBE"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_84_402">
                            <rect width="21" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span>{item?.title}</span>
                  </div>
                );
              })}
            </div>
            <div
              className="w-full sm:w-10/12 mx-auto flex items-center justify-center h-[320px] sm:h-[400px] md:h-[640px] rounded-3xl bg-cover bg-center"
              data-fancybox="about"
              data-aos="fade-up"
              data-aos-delay="200"
              href={info?.data?.video_url}
              style={{
                backgroundImage: `url(${info?.data?.video_bg})`,
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
          </div>
        </section>
      </main>
    </>
  );
}
export async function getServerSideProps({ params, locale }) {
  // fetch product
  const info = await axios
    .get(`services/${params?.id?.[0]}`, {
      headers: {
        "Accept-Language": locale,
      },
    })
    .then((res) => res?.data)
    .catch((err) => console.error(err));

  if (!info) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      info: info,
    },
  };
}

export default page;
