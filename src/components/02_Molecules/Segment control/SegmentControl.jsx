import React, { useState } from "react";
import Headding from "../../01_Atoms/Typography/Headding/Headding";
import styles from "./Navbar.module.css";
import Flex from "../../01_Atoms/Wrappers/Flex/Flex";
import styles from "./SegmentControl.module.css";

const SegmentControl = ({ options, onSegmentChange }) => {
  const [selected, setSelected] = useState(options[0]);

  const handleSegmentChange = (option) => {
    setSelected(option);
    if (onSegmentChange) onSegmentChange(option);
  };

  return (
    <div className={styles.segmentControl}>
      {options.map((option, index) => (
        <button
          key={index}
          className={`${styles.segmentButton} ${
            selected === option ? styles.active : ""
          }`}
          onClick={() => handleSegmentChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SegmentControl;
