import { AboutSection, Breadcrumbs, FAQ, Partners } from "@/components";
import Seo from "@/components/Seo/Seo";
import fetcher from "@/utils/fetcher";
import { useRouter } from "next/router";
import React from "react";
import { useIntl } from "react-intl";
import useSWR from "swr";

export default function About() {
  const router = useRouter();
  const intl = useIntl();

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
        title={seo?.data?.seo_about_title}
        description={seo?.data?.seo_about_description}
        body={seo?.data?.seo_about_keywords}
      />
      <Breadcrumbs
        links={[
          {
            id: 1,
            name: intl.formatMessage({ id: "aboutBody" }),
            url: `about`,
          },
        ]}
        title={intl.formatMessage({ id: "aboutBody" })}
      />
      <AboutSection page="about" />
      <FAQ />
      <Partners />
    </main>
  );
}
