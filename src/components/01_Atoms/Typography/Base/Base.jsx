import React from "react";
import styles from "../../../0_Tokens/Boiler.css";
import BaseStyle from "./Base.module.css";

function Base() {
  return (
    <div>
      <p className="text-xs">This is a small text.</p>
      <p className="text-sm">This is a slightly larger text.</p>
      <p className="text-base">This is a base text.</p>
      <p className="text-lg">This is a large text.</p>
      <p className="text-xl">This is an extra-large text.</p>
      <p className="text-2xl">This is a 2xl text.</p>
      <p className="text-3xl">This is a 3xl text.</p>
      <p className="text-4xl">This is a 4xl text.</p>
      <p className="text-5xl">This is a 5xl text.</p>
      <p className="text-6xl">This is a 6xl text.</p>
      <p className="text-7xl">This is a 7xl text.</p>
      <p className="text-8xl">This is a 8xl text.</p>
      <p className="text-9xl">This is a 9xl text.</p>
    </div>
  );
}

export default Base;
