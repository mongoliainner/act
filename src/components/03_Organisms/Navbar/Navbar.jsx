import React from "react";
import Headding from "../../01_Atoms/Typography/Headding/Headding";
import styles from "./Navbar.module.css";
import Flex from "../../01_Atoms/Wrappers/Flex/Flex";

function Navbar({ level = 1, weight, className, children }) {
  return (
    <Flex direction="row">
      <Headding level={3}>act.</Headding>
    </Flex>
  );
}

export default Navbar;
