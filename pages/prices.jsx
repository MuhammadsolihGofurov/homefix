import {
  AppForm,
  Breadcrumbs,
  FAQ,
  MembershipPlan,
  Opinions,
  ServiceCard,
} from "@/components";
import Seo from "@/components/Seo/Seo";
import { setServices } from "@/redux/slice/settings";
import axios from "@/utils/axios";
import fetcher from "@/utils/fetcher";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useIntl } from "react-intl";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";

function Prices({ info }) {
  const router = useRouter();
  const intl = useIntl();
  const dispatch = useDispatch();
  const { settings } = useSelector((state) => state.settings);

  // const { data: seo } = useSWR(["seo", router.locale], (url) =>
  //   fetcher(url, {
  //     headers: {
  //       "Accept-Language": router.locale,
  //     },
  //   })
  // );

  const { data: services } = useSWR(["services", router.locale], (url) =>
    fetcher(url, {
      headers: {
        "Accept-Language": router.locale,
      },
    })
  );

  useEffect(() => {
    dispatch(setServices(services?.data));
  }, [services?.data]);

  return (
    <main className="pt-20 md:pt-[100px]">
      <Seo
        title={info?.data?.seo_membership_title}
        description={info?.data?.seo_membership_description}
        body={info?.data?.seo_membership_keyword}
      />
      <Breadcrumbs
        links={[
          {
            id: 1,
            name: intl.formatMessage({ id: "membershipTitle" }),
            url: `prices`,
          },
        ]}
        title={intl.formatMessage({ id: "membershipTitle" })}
      />{" "}
      <div className="container">
        <div
          className="text-primary opacity-50 pb-5"
          dangerouslySetInnerHTML={{
            __html: settings?.membership_plan,
          }}
        ></div>
      </div>
      <MembershipPlan isTitle={false} />
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

export default Prices;
