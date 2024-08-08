import React, { useEffect, useState } from "react";
import PlanCard from "./plan-card";
import { useIntl } from "react-intl";
import Button from "@/components/Button/main-button";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setTotalSum, toggleRegisterModal } from "@/redux/slice/settings";
import PlanServices from "./plan-services";

export default function PlansBox({ plans }) {
  const intl = useIntl();
  const [activePlan, setActivePlan] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const currentPlanName = activePlan == 0 ? "corporate" : "individual";
  const [activeMonth, setActiveMonth] = useState(
    plans ? plans[currentPlanName]?.[0]?.id : plans?.["corporate"]?.[0]?.id
  );
  const dispatch = useDispatch();

  // 0 bu corporate
  // 1 bu individual

  // current month id changes
  useEffect(() => {
    setActiveMonth(plans?.[currentPlanName]?.[0]?.id);
  }, [activePlan, plans, currentPlanName]);

  useEffect(() => {
    localStorage.setItem("plans__duration", plans?.[currentPlanName]?.[0]?.id);
  }, [activePlan, plans, currentPlanName]);

  // months changes
  const changeMonths = (id) => {
    toast.success(`${intl.formatMessage({ id: "successMonthsChanged" })}`);
    setActiveMonth(id);

    // set info to local
    localStorage.setItem("plans__duration", id);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="membership__box py-5 px-3 sm:p-9 bg-box box rounded-xl flex flex-col lg:flex-row gap-10 items-start"
    >
      <div className="w-full lg:w-2/5">
        {/* plans */}
        <div className="grid grid-cols-1 gap-7 w-full">
          <PlanCard
            type="corporate"
            activePlan={activePlan}
            setActivePlan={setActivePlan}
            data={
              plans?.["corporate"]?.find((p, i) => p?.id == activeMonth) ||
              plans?.["corporate"]?.[0]
            }
          />
          <PlanCard
            type="individual"
            activePlan={activePlan}
            setActivePlan={setActivePlan}
            data={
              plans?.["individual"]?.find((p, i) => p?.id == activeMonth) ||
              plans?.["individual"]?.[0]
            }
          />
        </div>
      </div>
      <div className="w-full lg:w-3/5 flex flex-col gap-10 items-start">
        {/* months */}
        <div className="flex flex-col  items-start justify-center gap-3">
          <p className="font-medium text-base sm:text-xl text-primary opacity-50 text-centersm:">
            {intl.formatMessage({ id: "chooseMonths" })}
          </p>
          <div className="flex gap-4 flex-wrap">
            {plans?.[currentPlanName]?.map((item, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  className={`
                  sm:min-w-[96px] px-5 sm:px-7 py-2 sm:py-3 border-2 border-[#C6C6C6] text-center rounded-xl font-medium text-base sm:text-lg   ${
                    item?.id == activeMonth
                      ? "text-white  bg-main border-transparent"
                      : "text-primary opacity-50"
                  }
                  `}
                  onClick={() => changeMonths(item?.id)}
                >
                  {item?.duration}
                </button>
              );
            })}
          </div>
        </div>
        {/* advantages */}
        {activePlan == 0 ? (
          <div className="flex flex-col gap-3 w-full">
            <p className="text-primary opacity-60 text-base sm:text-lg font-medium">
              {intl.formatMessage({ id: "corporateBody" })}
            </p>
            {plans?.["corporate"]
              ?.find((p, i) => p?.id == activeMonth)
              ?.services?.map((item, index) => {
                return (
                  <div className="flex items-center gap-3" key={item?.title}>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_8_266)">
                        <path
                          d="M19.1739 9.15447V9.99992C19.1728 11.9603 18.5352 13.8678 17.3563 15.4379C16.1774 17.0081 14.5204 18.1567 12.6323 18.7126C10.7442 19.2684 8.72618 19.2016 6.87928 18.5223C5.03239 17.8429 3.45554 16.5873 2.3839 14.9427C1.31227 13.2981 0.803269 11.3527 0.932817 9.39657C1.06236 7.44043 1.82352 5.5784 3.10276 4.08817C4.382 2.59794 6.11079 1.55936 8.03128 1.12733C9.95178 0.695294 11.9611 0.892955 13.7596 1.69083"
                          stroke="#26BDBE"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20.0869 1.81812L10.0435 11.8181L7.30432 9.09084"
                          stroke="#26BDBE"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_8_266">
                          <rect width="21" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="flex-1 font-semibold text-primary opacity-80 text-base sm:text-lg">
                      {item?.title}
                    </span>
                  </div>
                );
              })}
          </div>
        ) : (
          // <p className="text-primary opacity-60 text-base sm:text-lg font-medium">
          //   {intl.formatMessage({ id: "individualRequest" })}{" "}
          // </p>
          <div className="flex flex-col gap-3 w-full">
            <p className="text-primary opacity-60 text-base sm:text-lg font-medium">
              {intl.formatMessage({ id: "individualBody" })}
            </p>
            <PlanServices />
          </div>
        )}
        <Button onClick={() => dispatch(toggleRegisterModal())}>
          {intl.formatMessage({ id: "register" })}
        </Button>
      </div>
    </div>
  );
}
