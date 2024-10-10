import React from "react";
import styles from "./Headding.module.css";

function Headding({ level = 1, weight, className, children }) {
  const HeadingLevel = `h${level}`;

  const combinedClassName = className
    ? `${styles[className]} ${styles.text}`
    : styles.defaultHeading;

  return (
    <HeadingLevel className={combinedClassName} style={{ fontWeight: weight }}>
      {children}
    </HeadingLevel>
  );
}

export default Headding;
