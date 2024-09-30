import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";

export default function Footer() {
  const { settings, socials } = useSelector((state) => state.settings);
  const router = useRouter();
  const intl = useIntl();

  const links1 = [
    {
      id: 1,
      name: intl.formatMessage({ id: "phone" }),
      value: settings?.main_phone,
      url: `tel:${settings?.main_phone}`,
    },
    {
      id: 2,
      name: intl.formatMessage({ id: "workHours" }),
      value: settings?.working_hours,
      url: `#`,
    },
    {
      id: 3,
      name: intl.formatMessage({ id: "email" }),
      value: settings?.email,
      url: `mailto:${settings?.email}`,
    },
    {
      id: 4,
      name: intl.formatMessage({ id: "address" }),
      value: settings?.address,
      url: "#",
    },
  ];
  const links2 = [
    {
      id: 1,
      name: intl.formatMessage({ id: "aboutTitle" }),
      value: settings?.main_phone,
      url: `/${router.locale}/about`,
    },
    {
      id: 2,
      name: intl.formatMessage({ id: "advTitle" }),
      value: settings?.working_hours,
      url: `#advantages`,
    },
    {
      id: 3,
      name: intl.formatMessage({ id: "pricing" }),
      value: settings?.email,
      url: `#pricing`,
    },
  ];
  const links3 = [
    {
      id: 1,
      name: intl.formatMessage({ id: "worksTitle" }),
      value: settings?.main_phone,
      url: `#works`,
    },
    {
      id: 2,
      name: intl.formatMessage({ id: "servicesTitle" }),
      value: settings?.working_hours,
      url: `/${router.locale}/services`,
    },
  ];
  const links4 = [
    {
      id: 1,
      name: intl.formatMessage({ id: "worksTitle" }),
      value: settings?.main_phone,
      url: `#works`,
    },
    {
      id: 2,
      name: intl.formatMessage({ id: "contact" }),
      value: settings?.working_hours,
      url: `/${router.locale}/contact`,
    },
  ];

  return (
    <footer
      className="bg-[#222] pt-20 pb-5 sm:py-20 rounded-t-3xl sm:rounded-t-[36px] shadow-md shadow-adv-bg-2"
      style={{ boxShadow: `0px -1px 10px rgba(38, 189, 190, 0.1)` }}
    >
      <div className="container flex flex-col gap-10 sm:gap-16">
        <div className="flex flex-row items-center justify-between flex-wrap gap-y-10 gap-x-5">
          <a
            href={`/${router.locale}`}
            title="logo"
            className="w-[96px] sm:w-[120px]"
          >
            <img src={settings?.logo} alt="logo" title="logo" loading="lazy" />
          </a>
          <div className="flex items-center gap-5 sm:gap-10 flex-wrap">
            <div className="flex items-center text-white gap-3 sm:w-[320px]">
              <svg
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="0.5"
                  width="59"
                  height="59"
                  rx="29.5"
                  fill="white"
                />
                <rect
                  x="1"
                  y="0.5"
                  width="59"
                  height="59"
                  rx="29.5"
                  stroke="white"
                />
                <path
                  d="M39.5 28C39.5 35 30.5 41 30.5 41C30.5 41 21.5 35 21.5 28C21.5 25.6131 22.4482 23.3239 24.136 21.636C25.8239 19.9482 28.1131 19 30.5 19C32.8869 19 35.1761 19.9482 36.864 21.636C38.5518 23.3239 39.5 25.6131 39.5 28Z"
                  stroke="#6C7EC5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30.5 31C32.1569 31 33.5 29.6569 33.5 28C33.5 26.3431 32.1569 25 30.5 25C28.8431 25 27.5 26.3431 27.5 28C27.5 29.6569 28.8431 31 30.5 31Z"
                  stroke="#6C7EC5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="flex-1">{settings?.address}</span>
            </div>
            <div className="flex items-center text-white gap-3">
              <svg
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="0.5"
                  width="59"
                  height="59"
                  rx="29.5"
                  fill="white"
                />
                <rect
                  x="1"
                  y="0.5"
                  width="59"
                  height="59"
                  rx="29.5"
                  stroke="white"
                />
                <path
                  d="M40.4438 34.9562V37.9562C40.4449 38.2347 40.3878 38.5104 40.2763 38.7656C40.1647 39.0208 40.001 39.2498 39.7958 39.4381C39.5906 39.6264 39.3483 39.7697 39.0845 39.8589C38.8207 39.9482 38.5411 39.9813 38.2638 39.9562C35.1866 39.6219 32.2307 38.5704 29.6337 36.8862C27.2176 35.3509 25.1691 33.3024 23.6338 30.8862C21.9437 28.2774 20.892 25.3072 20.5638 22.2162C20.5388 21.9397 20.5716 21.661 20.6603 21.3979C20.7489 21.1347 20.8913 20.8929 21.0785 20.6879C21.2657 20.4828 21.4936 20.3189 21.7475 20.2068C22.0015 20.0946 22.2761 20.0365 22.5538 20.0362H25.5538C26.0391 20.0315 26.5095 20.2033 26.8775 20.5198C27.2455 20.8362 27.4858 21.2757 27.5538 21.7562C27.6804 22.7163 27.9152 23.659 28.2538 24.5662C28.3883 24.9242 28.4174 25.3131 28.3377 25.6871C28.2579 26.0611 28.0726 26.4043 27.8038 26.6762L26.5338 27.9462C27.9573 30.4498 30.0302 32.5227 32.5338 33.9462L33.8038 32.6762C34.0756 32.4074 34.4189 32.2221 34.7929 32.1423C35.1668 32.0626 35.5558 32.0917 35.9137 32.2262C36.821 32.5648 37.7637 32.7996 38.7238 32.9262C39.2095 32.9948 39.6532 33.2394 39.9703 33.6137C40.2874 33.988 40.4559 34.4658 40.4438 34.9562Z"
                  stroke="#6C7EC5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="flex-1 flex flex-col gap-0">
                <a
                  href={`tel:${settings?.main_phone}`}
                  title={settings?.main_phone}
                >
                  {settings?.main_phone}
                </a>
                <a
                  href={`tel:${settings?.additional_phone}`}
                  title={settings?.additional_phone}
                >
                  {settings?.additional_phone}
                </a>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {socials?.map((item, index) => {
              return (
                <a
                  href={item?.link}
                  key={index}
                  title={item?.name}
                  className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center"
                >
                  <img
                    src={item?.icon}
                    alt={item?.name}
                    title={item?.name}
                    loading="lazy"
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className="w-full h-[1px] bg-white opacity-10"></div>
        <div className="flex items-start justify-between gap-x-5 gap-y-10 flex-wrap">
          <div className="flex flex-col gap-5 sm:gap-7 text-white sm:w-auto w-full">
            <h5 className="text-xl font-semibold">
              {intl.formatMessage({ id: "footerLink1Title" })}
            </h5>
            <div className="flex flex-col gap-3 font-normal text-sm">
              {links1?.map((link, index) => {
                return (
                  <a href={`${link?.url}`} title={link?.name} key={index}>
                    <span>{link?.name}</span>:{" "}
                    <span className="hover:text-main">{link?.value}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-5 sm:gap-7 text-white sm:w-auto w-full">
            <h5 className="text-xl font-semibold">
              {intl.formatMessage({ id: "footerLink2Title" })}
            </h5>
            <div className="flex flex-col gap-3 font-normal text-sm">
              {links2?.map((link, index) => {
                return (
                  <a
                    href={`${link?.url}`}
                    title={link?.name}
                    key={index}
                    className="hover:text-main"
                  >
                    <span>{link?.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-5 sm:gap-7 text-white sm:w-auto w-full">
            <h5 className="text-xl font-semibold">
              {intl.formatMessage({ id: "footerLink3Title" })}
            </h5>
            <div className="flex flex-col gap-3 font-normal text-sm">
              {links3?.map((link, index) => {
                return (
                  <a
                    href={`${link?.url}`}
                    title={link?.name}
                    key={index}
                    className="hover:text-main"
                  >
                    <span>{link?.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-5 sm:gap-7 text-white sm:w-auto w-full">
            <h5 className="text-xl font-semibold">
              {intl.formatMessage({ id: "footerLink4Title" })}
            </h5>
            <div className="flex flex-col gap-3 font-normal text-sm">
              {links4?.map((link, index) => {
                return (
                  <a
                    href={`${link?.url}`}
                    title={link?.name}
                    key={index}
                    className="hover:text-main"
                  >
                    <span>{link?.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center lg:flex-row flex-col gap-2 text-white pt-5 sm:pt-20 sm:text-start text-center">
          <p>{intl.formatMessage({ id: "copywrite" })}</p>
          {/* <a href="#" className="text-main">
            {intl.formatMessage({ id: "developed" })}
          </a> */}
        </div>
      </div>
    </footer>
  );
}
