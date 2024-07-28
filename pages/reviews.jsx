import {
  AboutSection,
  Breadcrumbs,
  FAQ,
  Opinions,
  Partners,
} from "@/components";
import Seo from "@/components/Seo/Seo";
import fetcher from "@/utils/fetcher";
import { useRouter } from "next/router";
import React from "react";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import useSWR from "swr";

export default function Reviews() {
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
    <main className="pt-20 md:pt-[120px]">
      <Seo
        title={seo?.data?.seo_reviews_title}
        description={seo?.data?.seo_reviews_description}
        body={seo?.data?.seo_reviews_keywords}
      />
      <Breadcrumbs
        links={[
          {
            id: 1,
            name: intl.formatMessage({ id: "opinionsTitle" }),
            url: `reviews`,
          },
        ]}
        title={intl.formatMessage({ id: "opinionsTitle" })}
      />
      <div className="container">
        <div
          className="text-primary opacity-50 pb-16 sm:pb-20"
          dangerouslySetInnerHTML={{
            __html: settings?.reviews_texts,
          }}
        ></div>
      </div>
      <Opinions />
    </main>
  );
}
