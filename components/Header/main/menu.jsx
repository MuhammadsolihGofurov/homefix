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
    },
    {
      id: 2,
      title: intl.formatMessage({ id: "pricing" }),
      url: `#pricing`,
    },
    {
      id: 3,
      title: intl.formatMessage({ id: "services" }),
      url: `/${router.locale}/services`,
    },
    {
      id: 4,
      title: intl.formatMessage({ id: "reviews" }),
      url: `#reviews`,
    },
    {
      id: 5,
      title: intl.formatMessage({ id: "contact" }),
      url: `/${router.locale}/contact`,
    },
  ];

  return (
    <div className="2xl:flex hidden items-center gap-12">
      {data?.map((item, index) => (
        <Link href={item.url} key={item.title}>
          <span className="text-primary font-semibold text-base cursor-pointer hover:text-main">
            {item.title}
          </span>
        </Link>
      ))}
    </div>
  );
}
