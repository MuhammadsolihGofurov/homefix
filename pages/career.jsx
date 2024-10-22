import { AppForm, Breadcrumbs, FAQ, Opinions } from "@/components";
import Seo from "@/components/Seo/Seo";
import axios from "@/utils/axios";
import fetcher from "@/utils/fetcher";
import { useRouter } from "next/router";
import React from "react";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import useSWR from "swr";

function Career({ info }) {
  const router = useRouter();
  const intl = useIntl();
  const { settings } = useSelector((state) => state.settings);

  // const { data: seo } = useSWR(["seo", router.locale], (url) =>
  //   fetcher(url, {
  //     headers: {
  //       "Accept-Language": router.locale,
  //     },
  //   })
  // );

  return (
    <main className="pt-20 md:pt-[100px]">
      <Seo
        title={info?.data?.seo_career_title}
        description={info?.data?.seo_career_description}
        body={info?.data?.seo_career_keywords}
      />
      <Breadcrumbs
        links={[
          {
            id: 1,
            name: intl.formatMessage({ id: "careerTitle" }),
            url: `career`,
          },
        ]}
        title={intl.formatMessage({ id: "careerTitle" })}
      />
      <div className="container flex flex-col gap-8">
        <div
          className="text-primary opacity-80"
          dangerouslySetInnerHTML={{
            __html: settings?.career_texts,
          }}
        ></div>
        <div className="flex flex-col gap-5 pb-16 sm:pb-20">
          <h3 className="text-[#365CA8] font-semibold text-lg sm:text-xl">
            {intl.formatMessage({ id: "careerBody" })}
          </h3>
          <div className="w-full 2xl:w-3/6">
            <AppForm page="career" />
          </div>
        </div>
      </div>
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

export default Career;
