import React, { Children } from "react";
import styles from "./Base.module.css";

function Base({ weight, className, children }) {
  const combinedClassName = className
    ? `${styles[className]} ${styles.text}`
    : styles.base;

  return (
    <p className={combinedClassName} style={{ fontWeight: weight }}>
      {children}
    </p>
  );
}

export default Base;
