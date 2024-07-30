import React from "react";

export default function Input({
  type,
  placeholder,
  name,
  required,
  register = () => {},
  validation,
  autoComplete = false,
  ref = () => {},
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        placeholder-shown={placeholder}
        name={name}
        id={name}
        required={required}
        autoComplete="off"
        className="px-5 py-4 bg-input w-full placeholder:leading-normal placeholder:text-gray-400 placeholder:font-normal placeholder:text-base
        focus:outline-main rounded-md text-primary"
        
        {...register(name, validation)}
      />
    </>
  );
}
