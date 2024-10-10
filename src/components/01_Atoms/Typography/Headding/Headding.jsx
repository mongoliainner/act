import React from "react";
import styles from "./Headding.module.css";

function Headding({ level = 1, weight, className, children }) {
  const Headding = `h${level}`;

  const combinedClassName = className
    ? `${styles[className]} ${styles.text}`
    : styles.defaultHeading;

  return (
    <Headding className={combinedClassName} style={{ fontWeight: weight }}>
      {children}
    </Headding>
  );
}

export default Headding;
