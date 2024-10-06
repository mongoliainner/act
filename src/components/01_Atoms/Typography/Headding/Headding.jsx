import React, { Children } from "react";
import styles from "../../../0_Tokens/Boiler.css";
import HeaddingStyles from "./Heading.module.css";

function Headding({ level, weight, className, children }) {
  const HeadingLevel = `h${level}`;
  return (
    <HeadingLevel className={className} style={{ fontWeight: weight }}>
      {children}
    </HeadingLevel>
  );
}

export default Headding;
