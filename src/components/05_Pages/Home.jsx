import React from "react";
import Headding from "../01_Atoms/Typography/Headding/Headding";
import Base from "../01_Atoms/Typography/Base/Base";
import Flex from "../01_Atoms/Wrappers/Flex/Flex";
import Grid from "../01_Atoms/Wrappers/Grid/Grid";
import GridItem from "../01_Atoms/Wrappers/Grid/GridItem";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.Home}>
      <Grid className="name" columns={6} rows={2}>
        <GridItem gridColumn="span 5" className="card">
          Эффекты
        </GridItem>
        <GridItem className="card">
          <Headding level={5}>fefe</Headding>
        </GridItem>
        <GridItem className="card">Эффекты</GridItem>
      </Grid>
      <Headding className="TitleLarge">SORE</Headding>
    </div>
  );
}

export default Home;
