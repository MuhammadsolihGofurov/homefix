import React, { useState } from "react";
import { useIntl } from "react-intl";

export default function File({
  placeholder,
  name,
  required,
  register = () => {},
  validation,
  autoComplete = false,
}) {
  const intl = useIntl();
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  return (
    <div className="file__input px-5 py-4 bg-input w-full focus:outline-main rounded-md text-primary relative z-0 flex items-center gap-4 text-gray-400 ">
      <input
        type={"file"}
        placeholder={placeholder}
        placeholder-shown={placeholder}
        name={name}
        id={name}
        required={required}
        autoComplete="off"
        className="w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer"
        {...register(name, validation)}
        onChange={handleFileChange}
      />
      <span>
        <svg
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.0039 13.9988L13.0039 9.99878L9.00391 13.9988"
            stroke="#26BDBE"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.0039 9.99878V18.9988"
            stroke="#26BDBE"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.3953 16.3888C21.3707 15.857 22.1412 15.0156 22.5852 13.9974C23.0292 12.9791 23.1215 11.842 22.8475 10.7655C22.5735 9.68891 21.9488 8.73427 21.072 8.05221C20.1952 7.37014 19.1162 6.9995 18.0053 6.99876H16.7453C16.4426 5.828 15.8785 4.7411 15.0953 3.81976C14.3121 2.89841 13.3302 2.16661 12.2234 1.67937C11.1167 1.19213 9.91388 0.962122 8.70545 1.00665C7.49701 1.05117 6.3144 1.36906 5.24651 1.93643C4.17862 2.50379 3.25324 3.30587 2.53995 4.28235C1.82666 5.25882 1.34402 6.3843 1.12831 7.57416C0.912601 8.76402 0.969437 9.98729 1.29454 11.152C1.61965 12.3168 2.20457 13.3926 3.00533 14.2988"
            stroke="#26BDBE"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.0039 13.9988L13.0039 9.99878L9.00391 13.9988"
            stroke="#26BDBE"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>{fileName || intl.formatMessage({ id: "resumeInput" })}</span>
    </div>
  );
}
