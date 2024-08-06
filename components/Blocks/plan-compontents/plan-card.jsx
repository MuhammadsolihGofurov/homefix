import React from "react";
import toast from "react-hot-toast";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";

export default function PlanCard({
  type,
  activePlan,
  data,
  activeIndex,
  setActivePlan,
}) {
  const intl = useIntl();
  const isType = type == "corporate";
  const badge = isType ? "corporate" : "individual";
  const image = isType ? "/images/corporate.png" : "/images/individual.png";
  const plan = isType ? 0 : 1;
  const plansType = plan == 0 ? "corporate" : "individual";
  const { individual_total } = useSelector((state) => state.settings);

  const changePlan = (id) => {
    toast.success(intl.formatMessage({ id: "successPlanChanged" }));
    setActivePlan(id);
  };

  return (
    <div
      className={` ${
        isType
          ? "corporate bg-corporate hover:border-main"
          : "individual bg-individual hover:border-yellow-500"
      } px-5 sm:px-8 pt-5 sm:pt-9 pb-8 sm:pb-14 rounded-xl  flex flex-col gap-10 items-start relative z-0 cursor-pointer border-2 border-transparent  transition-colors duration-200`}
      onClick={() => changePlan(plan)}
    >
      <div
        className={`px-4 py-2 rounded-full bg-white uppercase text-sm sm:text-lg font-bold ${
          isType ? "text-main" : "text-yellow-500"
        }`}
      >
        {intl.formatMessage({ id: badge })}
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl sm:text-5xl font-bold text-primary">
          {individual_total !== 0 && type == "individual"
            ? individual_total
            : data?.amount}{" "}
          <span className="text-sm sm:text-lg">
            {intl.formatMessage({ id: "sum" })}
          </span>
        </h3>
        <p className="text-primary opacity-75 font-medium sm:text-base text-sm">
          {intl.formatMessage({ id: "corporateText" })}
        </p>
      </div>
      {/* check */}
      <div
        className={`absolute top-4 right-4 ${
          activePlan == plan ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg
          width="35"
          height="32"
          viewBox="0 0 35 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] h-[17px] sm:w-[35px] sm:h-[32px]"
        >
          <g clipPath="url(#clip0_8_147)">
            <path
              d="M31.9565 14.6472V15.9999C31.9546 19.1366 30.8921 22.1886 28.9272 24.7008C26.9624 27.213 24.2006 29.0508 21.0538 29.9402C17.907 30.8295 14.5437 30.7227 11.4655 29.6357C8.38734 28.5487 5.75925 26.5397 3.97319 23.9084C2.18714 21.2771 1.33881 18.1644 1.55472 15.0346C1.77063 11.9048 3.03922 8.92551 5.17129 6.54114C7.30336 4.15678 10.1847 2.49505 13.3855 1.8038C16.5863 1.11254 19.9352 1.4288 22.9326 2.7054"
              stroke="#222222"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M33.4783 2.90906L16.7391 18.9091L12.1739 14.5454"
              stroke="#222222"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_8_147">
              <rect width="35" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      {/* image */}
      <div className="absolute bottom-0 right-5 -z-10 small:block hidden">
        <img
          src={image}
          alt={isType ? "corporate" : "individual"}
          title={isType ? "corporate" : "individual"}
        />
      </div>
    </div>
  );
}
