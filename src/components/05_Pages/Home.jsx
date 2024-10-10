import React from "react";
import Headding from "../01_Atoms/Typography/Headding/Headding";
import Base from "../01_Atoms/Typography/Base/Base";
import Flex from "../01_Atoms/Wrappers/Flex/Flex";
import Grid from "../01_Atoms/Wrappers/Grid/Grid";
import GridItem from "../01_Atoms/Wrappers/Grid/GridItem";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className="Home">
      <Headding className="TitleLarge">Говно</Headding>
      <Base>
        Говно, залупа, пенис, хер, давалка, хуй, блядина. Головка, шлюха, жопа,
        член, еблан, петухГовно, залупа, пенис, хер, давалка, хуй, блядина.
        Головка, шлюха, жопа, член, еблан, петухГовно, залупа, пенис, хер,
        давалка, хуй, блядина. Головка, шлюха, жопа, член, еблан, петухГовно,
        залупа, пенис, хер, давалка, хуй, блядина. Головка, шлюха, жопа, член,
        еблан, петухГовно, залупа, пенис, хер, давалка, хуй, блядина. Головка,
        шлюха, жопа, член, еблан, петух
      </Base>
      <Grid>
        <GridItem gridRow="span 2">
          <Headding className="TitleLarge">Г</Headding>
        </GridItem>
        <GridItem className="red">о</GridItem>
        <GridItem>в</GridItem>
        <GridItem>но</GridItem>
      </Grid>
    </div>
  );
}

export default Home;
