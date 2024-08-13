import { toggleOffcanvas } from "@/redux/slice/settings";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useIntl } from "react-intl";
import { useDispatch, useSelector } from "react-redux";

export default function Offcanvas() {
  const dispatch = useDispatch();
  const { offcanvas } = useSelector((state) => state.settings);
  const intl = useIntl();
  const router = useRouter();

  const menu = [
    {
      id: 1,
      title: intl.formatMessage({ id: "home" }),
      url: `/${router.locale}`,
    },
    {
      id: 2,
      title: intl.formatMessage({ id: "pricing" }),
      url: `/${router.locale}/?#pricing`,
    },
    {
      id: 3,
      title: intl.formatMessage({ id: "services" }),
      url: `/${router.locale}/services`,
    },
    {
      id: 4,
      title: intl.formatMessage({ id: "reviews" }),
      url: `/${router.locale}/reviews`,
    },
    {
      id: 5,
      title: intl.formatMessage({ id: "careerTitle" }),
      url: `/${router.locale}/career`,
    },
    {
      id: 6,
      title: intl.formatMessage({ id: "contact" }),
      url: `/${router.locale}/contact`,
    },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen z-[999] bg-nav text-text-primary p-5 transition-transform duration-200 ${
        offcanvas ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="offcanvas__header flex flex-row items-center justify-end">
        <button type="button" onClick={() => dispatch(toggleOffcanvas())}>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 15.2896C19 15.716 18.8507 16.0786 18.5522 16.3771L16.3771 18.5522C16.0786 18.8507 15.716 19 15.2896 19C14.8631 19 14.5006 18.8507 14.202 18.5522L9.5 13.8502L4.79798 18.5522C4.49944 18.8507 4.13692 19 3.71044 19C3.28395 19 2.92144 18.8507 2.6229 18.5522L0.447811 16.3771C0.14927 16.0786 0 15.716 0 15.2896C0 14.8631 0.14927 14.5006 0.447811 14.202L5.14983 9.5L0.447811 4.79798C0.14927 4.49944 0 4.13692 0 3.71044C0 3.28395 0.14927 2.92144 0.447811 2.6229L2.6229 0.447811C2.92144 0.14927 3.28395 0 3.71044 0C4.13692 0 4.49944 0.14927 4.79798 0.447811L9.5 5.14983L14.202 0.447811C14.5006 0.14927 14.8631 0 15.2896 0C15.716 0 16.0786 0.14927 16.3771 0.447811L18.5522 2.6229C18.8507 2.92144 19 3.28395 19 3.71044C19 4.13692 18.8507 4.49944 18.5522 4.79798L13.8502 9.5L18.5522 14.202C18.8507 14.5006 19 14.8631 19 15.2896Z"
              fill="#242424"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-5 pt-5">
        <ul className="flex flex-col gap-3">
          {menu?.map((item, index) => {
            return (
              <li
                key={index}
                className="link__hover"
                onClick={() => dispatch(toggleOffcanvas())}
              >
                <Link href={item?.url}>
                  <span className="text-primary cursor-pointer">{item?.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-row">
          {router.locales.map((lang, index) => {
            return (
              <a
                key={index}
                locale={lang}
                href={`/${lang}/${router.asPath}`}
                className={`uppercase text-primary block py-2 px-3 rounded-full ${
                  router.locale == lang ? "bg-main text-primary" : ""
                }`}
              >
                {lang}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
