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
            className="w-[100px] xs:w-[120px]"
          >
            <img
              src={settings?.logo}
              alt="logo"
              title="logo"
              className="w-[100px] xs:w-[120px]"
            />
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
              {/* <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.104 14.4765V17.1862C18.1049 17.4377 18.0559 17.6867 17.9599 17.9172C17.864 18.1477 17.7232 18.3546 17.5468 18.5247C17.3703 18.6947 17.1619 18.8242 16.935 18.9048C16.7081 18.9854 16.4677 19.0153 16.2291 18.9927C13.5828 18.6907 11.0407 17.7409 8.80727 16.2197C6.72934 14.8329 4.96761 12.9827 3.64721 10.8003C2.19377 8.44389 1.28927 5.76107 1.00698 2.96915C0.985489 2.71938 1.01375 2.46764 1.08997 2.22996C1.16619 1.99229 1.28869 1.77389 1.44968 1.58866C1.61067 1.40343 1.80662 1.25544 2.02505 1.15411C2.24348 1.05278 2.47961 1.00032 2.7184 1.00009H5.29843C5.7158 0.995773 6.12042 1.151 6.43688 1.43683C6.75333 1.72267 6.96003 2.11961 7.01845 2.55366C7.12734 3.42084 7.3293 4.27229 7.62045 5.09177C7.73616 5.41507 7.76121 5.76642 7.69261 6.1042C7.62402 6.44198 7.46467 6.75203 7.23345 6.99761L6.14124 8.14473C7.36551 10.406 9.14822 12.2784 11.3013 13.5642L12.3935 12.4171C12.6273 12.1742 12.9225 12.0069 13.2442 11.9348C13.5658 11.8628 13.9003 11.8891 14.2081 12.0106C14.9884 12.3164 15.7991 12.5285 16.6248 12.6429C17.0425 12.7048 17.424 12.9258 17.6968 13.2639C17.9695 13.6019 18.1144 14.0335 18.104 14.4765Z"
                  stroke="#6C7EC5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-primary"
                />
              </svg> */}
            </a>
            <Theme />
            {/* <div className="lg:block hidden">
              <Button title={intl.formatMessage({ id: "login" })}>
                {intl.formatMessage({ id: "login" })}
              </Button>
            </div> */}
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
