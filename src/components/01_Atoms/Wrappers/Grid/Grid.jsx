import React from "react";
import styles from "./Grid.module.css";

function Grid({
  columns = 2,
  rows = 2,
  padding = "0",
  gap = "10px",
  className,
  children,
}) {
  const combinedClassName = `${styles.gridWrapper} ${className || ""}`;

  return (
    <div
      className={combinedClassName}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        padding: padding,
        gap: gap,
      }}
    >
      {children}
    </div>
  );
}

export default Grid;
