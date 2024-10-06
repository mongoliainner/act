import React, { Children } from "react";
import styles from "../../../0_Tokens/Boiler.css";

function Base({ weight, className, children }) {
  return (
    <p className={className} style={{ fontWeight: weight }}>
      {children}
    </p>
  );
}

export default Base;
