import React from "react";
import Headding from "../01_Atoms/Typography/Headding/Headding";
import Base from "../01_Atoms/Typography/Base/Base";
import Flex from "../01_Atoms/Wrappers/Flex/Flex";
import Grid from "../01_Atoms/Wrappers/Grid/Grid";
import GridItem from "../01_Atoms/Wrappers/Grid/GridItem";
import Navbar from "../02_Molecules/Navbar/Navbar";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.Home}>
      <Navbar></Navbar>
    </div>
  );
}

export default Home;
