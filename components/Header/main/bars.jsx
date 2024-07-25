import React from "react";

export default function Bars() {
  return (
    <button type="button" className="2xl:hidden block">
      <svg
        width="21"
        height="15"
        viewBox="0 0 21 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.0369 5.34204H5.03687"
          stroke="#222222"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-primary"
        />
        <path
          d="M19.0369 1.34204H1.03687"
          stroke="#222222"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-primary"
        />
        <path
          d="M19.0369 9.34204H1.03687"
          stroke="#222222"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-primary"
        />
        <path
          d="M19.0369 13.342H5.03687"
          stroke="#222222"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-primary"
        />
      </svg>
    </button>
  );
}
