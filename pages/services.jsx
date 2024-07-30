import { AppForm, Breadcrumbs, FAQ, Opinions, ServiceCard } from "@/components";
import Seo from "@/components/Seo/Seo";
import fetcher from "@/utils/fetcher";
import { useRouter } from "next/router";
import React from "react";
import { useIntl } from "react-intl";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import useSWR from "swr";

export default function Services() {
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

  const { data: services } = useSWR(["services", router.locale], (url) =>
    fetcher(url, {
      headers: {
        "Accept-Language": router.locale,
      },
    })
  );

  return (
    <main className="pt-20 md:pt-[100px]">
      <Seo
        title={seo?.data?.seo_services_title}
        description={seo?.data?.seo_services_description}
        body={seo?.data?.seo_services_keywords}
      />
      <Breadcrumbs
        links={[
          {
            id: 1,
            name: intl.formatMessage({ id: "servicesTitle" }),
            url: `services`,
          },
        ]}
        title={intl.formatMessage({ id: "servicesTitle" })}
      />
      <div className="container flex flex-col gap-8">
        <div
          className="text-primary opacity-50"
          dangerouslySetInnerHTML={{
            __html: settings?.services_texts,
          }}
        ></div>
        <div className="pb-16 sm:pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services?.data ? (
            services?.data?.map((item, index) => (
              <ServiceCard key={index} data={item} />
            ))
          ) : (
            <>
              <Skeleton width={"100%"} height={"360px"} borderRadius={24} />
              <Skeleton width={"100%"} height={"360px"} borderRadius={24} />
              <Skeleton width={"100%"} height={"360px"} borderRadius={24} />
              <Skeleton width={"100%"} height={"360px"} borderRadius={24} />
              <Skeleton width={"100%"} height={"360px"} borderRadius={24} />
              <Skeleton width={"100%"} height={"360px"} borderRadius={24} />
              <Skeleton width={"100%"} height={"360px"} borderRadius={24} />
              <Skeleton width={"100%"} height={"360px"} borderRadius={24} />
              <Skeleton width={"100%"} height={"360px"} borderRadius={24} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
