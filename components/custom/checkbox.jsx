import React from "react";

export default function CustomCheckbox({
  name,
  checked,
  onChange,
  label,
  required = false,
}) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
        required={required}
        className="hidden"
      />
      <label
        htmlFor={name}
        className={`cursor-pointer flex items-center space-x-2 ${
          checked ? "text-primary" : "text-gray-400"
        }`}
      >
        <div
          className={`w-4 h-4 border-2 rounded ${
            checked ? "border-primary bg-primary" : "border-gray-400"
          } flex items-center justify-center`}
        >
          {checked && (
            <svg
              className="w-3 h-3 text-nav"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
        {label && <span>{label}</span>}
      </label>
    </div>
  );
}
