import {
  AboutSection,
  FAQ,
  HomeBanner,
  MembershipPlan,
  Opinions,
  Partners,
  Services,
  WhatDoWe,
} from "@/components";
import Seo from "@/components/Seo/Seo";
import fetcher from "@/utils/fetcher";
import { useRouter } from "next/router";
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

  return (
    <main className="">
      <Seo
        title={seo?.data?.seo_home_title}
        description={seo?.data?.seo_home_description}
        body={seo?.data?.seo_home_keywords}
      />
      <HomeBanner />
      <WhatDoWe />
      <AboutSection />
      <MembershipPlan />
      <Services />
      <Opinions />
      <FAQ />
      <Partners />
    </main>
  );
}
