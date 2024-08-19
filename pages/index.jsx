import {
  AboutSection,
  FAQ,
  HomeBanner,
  MembershipPlan,
  Opinions,
  Partners,
  Services,
  WhatDoWe,
  WorkStep,
} from "@/components";
import Seo from "@/components/Seo/Seo";
import axios from "@/utils/axios";
import fetcher from "@/utils/fetcher";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

function page({ info }) {
  const router = useRouter();

  // const { data: seo } = useSWR(["seo", router.locale], (url) =>
  //   fetcher(url, {
  //     headers: {
  //       "Accept-Language": router.locale,
  //     },
  //   })
  // );

  useEffect(() => {
    const hash = router.asPath.split("#")[1];
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.asPath]);

  return (
    <>
      <Seo
        title={info?.data?.seo_home_title}
        description={info?.data?.seo_home_description}
        body={info?.data?.seo_home_keywords}
      />
      <main>
        <HomeBanner />
        <WhatDoWe />
        <AboutSection />
        <MembershipPlan />
        <Services />
        <WorkStep />
        <Opinions />
        <FAQ />
        <Partners />
      </main>
    </>
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

export default page;
