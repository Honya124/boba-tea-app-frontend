import React from "react";
import Hero from "../components/Hero/Hero";
import { contentOne } from "../data/ContentData";
import Content from "../components/Content/Content";
import Features from "../components/Features/Features";
// import Carousel from "../components/Carousel/Carousel";
// import Footer from "../components/Footer/Footer";
import BobaFooter from "../components/Footer/BobaFooter";
import SampleShopItems from "./SampleShopItems";

function Home() {
  return (
    <>
      <Hero />
      {/* <ShopItems /> */}
      <SampleShopItems />
        <Features />
      <Content {...contentOne} />
      {/* <Content {...heroTwo} /> */}
      {/* <Content {...heroThree} /> */}
      {/* <Carousel /> */}
      {/* <Footer/> */}
      <BobaFooter />
    </>
  );
}

export default Home;
