import React, { Children } from "react";
import styles from "../../../0_Tokens/Boiler.css";

function Base({ level, children }) {
  const HeadingLevel = `h${level}`;
  return <HeadingLevel>{children}</HeadingLevel>;
}

export default Base;
