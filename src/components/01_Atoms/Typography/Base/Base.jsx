import React, { Children } from "react";
import BaseStyle from "./Base.module.css";

function Base({ weight, className, children }) {
  return (
    <p className={className} style={{ fontWeight: weight }}>
      {children}
    </p>
  );
}

export default Base;
