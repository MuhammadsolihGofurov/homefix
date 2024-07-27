import React from "react";
import PlanCard from "./plan-card";
import { useIntl } from "react-intl";
import Button from "@/components/Button/main-button";

export default function PlansBox({ plans }) {
  const intl = useIntl();

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      className="membership__box py-5 px-3 sm:p-9 bg-box box rounded-xl flex flex-col gap-10 items-center"
    >
      {/* plans */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 w-full">
        <PlanCard type="corporate" />
        <PlanCard type="individual" />
      </div>
      {/* months */}
      <div className="flex flex-col  items-center justify-center gap-3">
        <p className="font-medium text-base sm:text-xl text-primary opacity-50 text-centersm:">
          {intl.formatMessage({ id: "chooseMonths" })}
        </p>
        <div className="flex gap-4 flex-wrap">
          <button
            type="button"
            className="sm:min-w-[96px] px-5 sm:px-7 py-2 sm:py-3 border-2 border-[#C6C6C6] text-center rounded-xl font-medium text-base sm:text-lg text-primary opacity-50"
          >
            1
          </button>
          <button
            type="button"
            className="sm:min-w-[96px] px-5 sm:px-7 py-2 sm:py-3 border-2  text-center rounded-xl font-medium text-base sm:text-lg text-white  bg-main border-transparent"
          >
            3
          </button>
        </div>
      </div>
      {/* advantages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 w-full">
        <div className="flex flex-col gap-3">
          <p className="text-primary opacity-60 text-base sm:text-lg font-medium">
            {intl.formatMessage({ id: "corporateBody" })}
          </p>
          <div className="flex items-center gap-3">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_8_266)">
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
              2 visits, 1 hr 45 mins each ($350 value, brought to you for $245)
            </span>
          </div>
          <div className="flex items-center gap-3">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_8_266)">
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
              One skilled, fully-vetted handyman
            </span>
          </div>
          <div className="flex items-center gap-3">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_8_266)">
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
              Personalized home maintenance plan
            </span>
          </div>
          <div className="flex items-center gap-3">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_8_266)">
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
              2 visits, 1 hr 45 mins each ($350 value, brought to you for $245)
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-primary opacity-60 text-base sm:text-lg font-medium">
            {intl.formatMessage({ id: "individualBody" })}
          </p>
          <div className="flex items-center gap-3">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_8_266)">
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
              2 visits, 1 hr 45 mins each ($350 value, brought to you for $245)
            </span>
          </div>
        </div>
      </div>
      <Button>{intl.formatMessage({ id: "register" })}</Button>
    </div>
  );
}
