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
import fetcher from "@/utils/fetcher";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function Home() {
  const router = useRouter();

  const { data: seo } = useSWR(["seo", router.locale], (url) =>
    fetcher(url, {
      headers: {
        "Accept-Language": router.locale,
      },
    })
  );

  useEffect(() => {
    const hash = router.asPath.split("#")[1];
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.asPath]);

  return (
    <>
      <Seo
        title={seo?.data?.seo_home_title}
        description={seo?.data?.seo_home_description}
        body={seo?.data?.seo_home_keywords}
      />
      <main>
        <HomeBanner />
        <WhatDoWe />
        <AboutSection />
        <MembershipPlan/>
        <Services />
        <WorkStep />
        <Opinions />
        <FAQ />
        <Partners />
      </main>
    </>
  );
}
