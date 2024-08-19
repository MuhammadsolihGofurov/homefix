import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useIntl } from "react-intl";

export default function Menu() {
  const intl = useIntl();
  const router = useRouter();

  const data = [
    {
      id: 1,
      title: intl.formatMessage({ id: "home" }),
      url: `/${router.locale}`,
      current: "",
    },
    {
      id: 2,
      title: intl.formatMessage({ id: "pricing" }),
      url: `/${router.locale}/prices`,
      current: "prices",
    },
    {
      id: 3,
      title: intl.formatMessage({ id: "services" }),
      url: `/${router.locale}/services`,
      current: "services",
    },
    {
      id: 4,
      title: intl.formatMessage({ id: "reviews" }),
      url: `/${router.locale}/reviews`,
      current: "reviews",
    },
    {
      id: 5,
      title: intl.formatMessage({ id: "careerTitle" }),
      url: `/${router.locale}/career`,
      current: "career",
    },
    {
      id: 6,
      title: intl.formatMessage({ id: "contact" }),
      url: `/${router.locale}/contact`,
      current: "contact",
    },
  ];

  const currentLink = router.asPath.split("/")[1].trim();

  return (
    <div className="2xl:flex hidden items-center gap-12">
      {data?.map((item, index) => (
        <a href={item.url} key={item.title} title={item?.title}>
          <span
            className={` font-semibold text-base cursor-pointer hover:text-main ${
              item?.current == currentLink ? "text-main" : "text-primary"
            }`}
          >
            {item.title}
          </span>
        </a>
      ))}
    </div>
  );
}
