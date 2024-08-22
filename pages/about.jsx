import { AboutSection, Breadcrumbs, FAQ, Partners } from "@/components";
import Seo from "@/components/Seo/Seo";
import axios from "@/utils/axios";
import fetcher from "@/utils/fetcher";
import { useRouter } from "next/router";
import React from "react";
import { useIntl } from "react-intl";

function About({info}) {
  const router = useRouter();
  const intl = useIntl();

  // const { data: seo } = useSWR(["seo", router.locale], (url) =>
  //   fetcher(url, {
  //     headers: {
  //       "Accept-Language": router.locale,
  //     },
  //   })
  // );
  return (
    <main className="pt-20 md:pt-[120px]">
      <Seo
        title={info?.data?.seo_about_title}
        description={info?.data?.seo_about_description}
        body={info?.data?.seo_about_keywords}
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

export async function getServerSideProps({ params, locale }) {
  // fetch product
  const info = await axios
    .get(`seo`, {
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

export default About;
