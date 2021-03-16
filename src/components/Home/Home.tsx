import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Highlights from "./Highlights/Highlights";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Highlights />
      <Banner />
    </div>
  );
};

export default Home;
