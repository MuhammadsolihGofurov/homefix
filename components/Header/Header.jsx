import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Bars, Lang, Menu, Theme } from "./main";
import Button from "../Button/main-button";
import { useIntl } from "react-intl";
import Skeleton from "react-loading-skeleton";

export default function Header() {
  const { settings } = useSelector((state) => state.settings);
  const intl = useIntl();

  return (
    <header className="fixed top-0 left-0 w-full z-[100] ">
      <div className="container">
        <div className="flex items-center justify-between gap-3 w-full py-5 sm:py-6 px-3 sm:px-8 rounded-br-[36px] rounded-bl-[36px] bg-nav relative z-0 shadow-md shadow-adv-bg-2">
          <Link
            href="/"
            className="w-[100px] xs:w-[120px] h-[32px] xs:h-[42px]"
          >
            <img src={settings?.logo} alt="logo" title="logo" />
          </Link>
          <Menu />
          <div className="flex items-center gap-4 sm:gap-7">
            <Lang />
            <a
              href={`tel: ${settings?.main_phone}`}
              alt={`tel:${settings?.main_phone}`}
              title={`tel:${settings?.main_phone}`}
              className="text-primary font-semibold hover:text-main sm:block hidden"
            >
              {settings?.main_phone}
            </a>
            <Theme />
            <div className="lg:block hidden">
              <Button title={intl.formatMessage({ id: "login" })}>
                {intl.formatMessage({ id: "login" })}
              </Button>
            </div>
            <Bars />
          </div>

          {/* absolute */}
          <span className="absolute -top-5 xs:top-0 -left-[90px] z-0">
            <svg
              width="90"
              height="60"
              viewBox="0 0 90 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M90 -3.93403e-06L-2.62268e-06 0C64.1381 -2.80357e-06 90 26.8629 90 60L90 -3.93403e-06Z"
                fill="white"
                className="fill-nav"
              />
            </svg>
          </span>
          <span className="absolute -top-5 xs:top-0 -right-[90px] z-0">
            <svg
              width="90"
              height="60"
              viewBox="0 0 90 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-2.38403e-06 -2.38656e-07L-7.62939e-06 60C-3.89131e-06 17.2412 40.2944 3.28399e-06 90 7.62939e-06L-2.38403e-06 -2.38656e-07Z"
                fill="white"
                className="fill-nav"
              />
            </svg>
          </span>
        </div>
      </div>
    </header>
  );
}
