import React from "react";
import { Heading } from "..";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import { PlansBox } from "./plan-compontents";

export default function MembershipPlan({ isTitle = true }) {
  const intl = useIntl();
  const router = useRouter();

  const { data: data } = useSWR(["plans", router.locale], (url) =>
    fetcher(url, {
      headers: {
        "Accept-Language": router.locale,
      },
    })
  );

  if (!data && !data?.data?.length == 0) {
    return null;
  }

  return (
    <section id="pricing" className="pb-16 sm:py-20 lg:py-[120px]">
      <div className="container flex flex-col gap-10 lg:gap-20">
        {isTitle ? (
          <Heading
            title={intl.formatMessage({ id: "membershipTitle" })}
            body={intl.formatMessage({ id: "membershipBody" })}
            type="center"
          />
        ) : (
          <></>
        )}
        <PlansBox plans={data?.data} />
      </div>
    </section>
  );
}
