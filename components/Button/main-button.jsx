import React from "react";

export default function Button({
  type = "button",
  title,
  children,
  ...pageProps
}) {
  return (
    <button
      type={type}
      alt={title}
      title={title}
      className="bg-yellow_light px-10 py-4 rounded-xl font-bold text-primary uppercase button__shadow"
      {...pageProps}
    >
      {children}
    </button>
  );
}
