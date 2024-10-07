import React, { Children } from "react";
import HeaddingStyle from "./Headding.module.css";

function Headding({ level, weight, className, children }) {
  const HeadingLevel = `h${level}`;
  return (
    <HeadingLevel className={className} style={{ fontWeight: weight }}>
      {children}
    </HeadingLevel>
  );
}

export default Headding;
