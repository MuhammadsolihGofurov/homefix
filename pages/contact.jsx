import { AppForm, Breadcrumbs, FAQ, Opinions } from "@/components";
import Seo from "@/components/Seo/Seo";
import fetcher from "@/utils/fetcher";
import { useRouter } from "next/router";
import React from "react";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import useSWR from "swr";

export default function Contact() {
  const router = useRouter();
  const intl = useIntl();
  const { settings } = useSelector((state) => state.settings);

  const { data: seo } = useSWR(["seo", router.locale], (url) =>
    fetcher(url, {
      headers: {
        "Accept-Language": router.locale,
      },
    })
  );

  return (
    <main className="pt-20 md:pt-[100px]">
      <Seo
        title={seo?.data?.seo_contact_title}
        description={seo?.data?.seo_contact_description}
        body={seo?.data?.seo_contact_keywords}
      />
      <Breadcrumbs
        links={[
          {
            id: 1,
            name: intl.formatMessage({ id: "contactTitle" }),
            url: `contact`,
          },
        ]}
        title={intl.formatMessage({ id: "contactTitle" })}
      />
      <div className="container flex flex-col gap-8">
        <div
          className="text-primary opacity-50"
          dangerouslySetInnerHTML={{
            __html: settings?.contact_us_texts,
          }}
        ></div>
        <div className="flex flex-col gap-10 pt-5 pb-16 sm:pb-20">
          <div className="w-full flex lg:flex-row flex-col items-start justify-between gap-y-14">
            <div className="flex flex-col gap-5 sm:gap-8">
              <h3 className="text-main font-semibold text-lg sm:text-xl">
                {intl.formatMessage({ id: "contactTitle1" })}
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${settings?.main_phone}`}
                  className="flex flex-row items-center gap-3 py-3"
                >
                  <span className="w-9 flex items-center justify-center">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.1737 9.80435C10.1017 11.7372 11.3667 13.5487 12.9689 15.1508C14.571 16.7529 16.3825 18.018 18.3153 18.946C18.4816 19.0258 18.5647 19.0657 18.6699 19.0963C19.0437 19.2053 19.5027 19.127 19.8193 18.9004C19.9083 18.8366 19.9846 18.7604 20.137 18.6079C20.6031 18.1418 20.8362 17.9087 21.0706 17.7564C21.9544 17.1817 23.0938 17.1817 23.9777 17.7564C24.2121 17.9087 24.4451 18.1418 24.9113 18.608L25.1711 18.8678C25.8797 19.5764 26.234 19.9307 26.4265 20.3112C26.8092 21.0679 26.8092 21.9616 26.4265 22.7184C26.234 23.0989 25.8797 23.4532 25.1711 24.1617L24.9609 24.3719C24.2548 25.0781 23.9017 25.4312 23.4216 25.7008C22.889 26.0001 22.0616 26.2152 21.4507 26.2134C20.9001 26.2118 20.5238 26.1049 19.7712 25.8913C15.7267 24.7434 11.9102 22.5774 8.72621 19.3934C5.54224 16.2095 3.37627 12.393 2.22831 8.34846C2.0147 7.59586 1.9079 7.21956 1.90626 6.66897C1.90444 6.05801 2.11959 5.23068 2.41882 4.69801C2.68848 4.21797 3.04157 3.86489 3.74773 3.15872L3.95791 2.94854C4.6665 2.23995 5.02079 1.88566 5.4013 1.6932C6.15805 1.31044 7.05174 1.31044 7.80848 1.6932C8.18899 1.88566 8.54329 2.23995 9.25188 2.94854L9.5117 3.20837C9.97785 3.67451 10.2109 3.90758 10.3633 4.14195C10.938 5.0258 10.938 6.16525 10.3633 7.0491C10.2109 7.28347 9.97785 7.51654 9.5117 7.98268C9.35929 8.1351 9.28308 8.21131 9.21929 8.30039C8.99261 8.61696 8.91434 9.07597 9.02331 9.44978C9.05397 9.55497 9.09388 9.63809 9.1737 9.80435Z"
                        stroke="#26BDBE"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-primary font-medium text-lg hover:text-main">
                    {settings?.main_phone}
                  </span>
                </a>
                <a
                  href={settings?.location}
                  className="flex flex-row items-center gap-3 py-3"
                >
                  <span className="w-9 flex items-center justify-center">
                    <svg
                      width="24"
                      height="30"
                      viewBox="0 0 24 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9997 15.6666C14.2088 15.6666 15.9997 13.8758 15.9997 11.6666C15.9997 9.45749 14.2088 7.66663 11.9997 7.66663C9.79053 7.66663 7.99967 9.45749 7.99967 11.6666C7.99967 13.8758 9.79053 15.6666 11.9997 15.6666Z"
                        stroke="#26BDBE"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.9997 28.3333C14.6663 23 22.6663 19.5577 22.6663 12.3333C22.6663 6.44226 17.8907 1.66663 11.9997 1.66663C6.10864 1.66663 1.33301 6.44226 1.33301 12.3333C1.33301 19.5577 9.33301 23 11.9997 28.3333Z"
                        stroke="#26BDBE"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-primary font-medium text-lg hover:text-main">
                    {settings?.address}
                  </span>
                </a>
                <a
                  href={`mailto:${settings?.email}`}
                  className="flex flex-row items-center gap-3 py-3"
                >
                  <span className="w-9 flex items-center justify-center">
                    <svg
                      width="26"
                      height="23"
                      viewBox="0 0 26 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.4 1.66663H22.6C23.92 1.66663 25 2.81019 25 4.20788V19.4554C25 20.8531 23.92 21.9966 22.6 21.9966H3.4C2.08 21.9966 1 20.8531 1 19.4554V4.20788C1 2.81019 2.08 1.66663 3.4 1.66663Z"
                        stroke="#26BDBE"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25 4.33301L13 13.333L1 4.33301"
                        stroke="#26BDBE"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-primary font-medium text-lg hover:text-main">
                    {settings?.email}
                  </span>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-3/6 flex flex-col gap-5 sm:gap-8">
              <h3 className="text-main font-semibold text-lg sm:text-xl">
                {intl.formatMessage({ id: "contactTitle2" })}
              </h3>
              <AppForm page="contact" />
            </div>
          </div>
          {settings?.location ? (
            <div className="h-[280px] sm:h-[320px] lg:h-[500px] rounded-2xl overflow-hidden">
              <iframe
                src={settings?.location}
                width="100%"
                height="100%"
                frameborder="0"
              ></iframe>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </main>
  );
}
