import React from "react";
import styles from "./GridItem.module.css";

function GridItem({
  direction = "column",
  wrap = "nowrap",
  justifyContent = "flex-start",
  alignItems = "flex-start",
  paddingTop = "0",
  paddingBottom = "0",
  paddingLeft = "0",
  paddingRight = "0",
  gap = "10px",
  width = "100%",
  height = "100%",
  gridColumn = "1fr",
  gridRow = "1fr",
  className,
  children,
}) {
  const combinedClassName = className
    ? `${styles[className]} ${styles.text}`
    : styles.flexWrapper;

  return (
    <div
      className={combinedClassName}
      style={{
        flexDirection: direction,
        flexWrap: wrap,
        justifyContent: justifyContent,
        alignItems: alignItems,
        padding: `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`,
        gap: gap,
        width: width,
        height: height,
        gridColumn: gridColumn,
        gridRow: gridRow,
      }}
    >
      {children}
    </div>
  );
}

export default GridItem;
