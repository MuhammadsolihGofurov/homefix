import React from "react";
import { Heading } from "..";
import { useIntl } from "react-intl";
import { useRouter } from "next/router";

export default function Services() {
  const intl = useIntl();
  const router = useRouter();

  return (
    <section
      id="services"
      className="pb-16 sm:py-20 lg:py-[120px] flex flex-col gap-10 lg:gap-20"
    >
      <div className="container">
        <Heading
          title={intl.formatMessage({ id: "servicesTitle" })}
          body={intl.formatMessage({ id: "servicesBody" })}
          type="button"
          button={intl.formatMessage({ id: "servicesButton" })}
          link={`/${router.locale}/services`}
        />
      </div>
    </section>
  );
}
