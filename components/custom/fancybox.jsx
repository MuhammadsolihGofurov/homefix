import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";

function Fancybox({ delegate = "[data-fancybox]", options = {}, children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      NativeFancybox.bind(container, delegate, options);

      return () => {
        NativeFancybox.unbind(container);
        NativeFancybox.close();
      };
    }
  }, [delegate, options]);

  return <div ref={containerRef}>{children}</div>;
}

Fancybox.propTypes = {
  delegate: PropTypes.string,
  options: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default Fancybox;
