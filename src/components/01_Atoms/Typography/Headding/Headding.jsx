import React, { Children } from "react";
import styles from "./Headding.module.css";

function Headding({ level, weight, className = "", children }) {
  const HeadingLevel = `h${level}`;
  return (
    <HeadingLevel
      className={`${styles.defaultHeading} ${className}`}
      style={{ fontWeight: weight }}
    >
      {children}
    </HeadingLevel>
  );
}

export default Headding;
