import { Checkbox } from "@/components";
import { setIndividualServices } from "@/redux/slice/settings";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PlanServices() {
  const { services, individual_services } = useSelector(
    (state) => state.settings
  );
  const [active, setActive] = useState(0);
  const [checkedItems, setCheckedItems] = useState([]);
  const dispatch = useDispatch();

  const handleTabs = (id) => {
    setActive(active == id ? null : id);
  };

  const handleCheckboxChange = (p) => {
    dispatch(setIndividualServices(p));
  };

  return (
    <div className="flex flex-col gap-3">
      {console.log(individual_services)}
      {services?.map((item, index) => {
        return (
          <div className="flex flex-col gap-1" key={index}>
            <button
              type="button"
              className={`w-full flex flex-row items-center justify-between ${
                active == index ? "rounded-t-xl" : "rounded-xl"
              } text-primary`}
              onClick={() => handleTabs(index)}
            >
              <span className="font-medium text-base text-start">
                {item?.title}
              </span>
              <span>
                <svg
                  width="14"
                  height="6"
                  viewBox="0 0 19 10"
                  fill="none"
                  className={`${
                    active == index ? "rotate-180" : "rotate-0"
                  } transition-transform duration-300`}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L9.5 9L18 1"
                    stroke="#222"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-primary"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`rounded-xl text-primary flex-col gap-1 ${
                active == index
                  ? "opacity-100 visible h-auto flex"
                  : "opacity-0 invisible h-0 hidden"
              }`}
            >
              {item?.advantages?.map((p, i) => {
                return (
                  <Checkbox
                    label={p?.title}
                    key={i}
                    name={p?.title}
                    checked={individual_services.some(
                      (item) => item.id === p.id
                    )}
                    onChange={() => handleCheckboxChange(p)}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
