import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Highlights from "./Highlights/Highlights";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Highlights />
      <section>
        <h2>Banners publicitarios</h2>
      </section>
    </div>
  );
};

export default Home;
