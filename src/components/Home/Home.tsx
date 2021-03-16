import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";

const Home = () => {
  return (
    <div>
      <Hero />

      <About />

      <section>
        <h2>Sección 1</h2>
      </section>
      <section>
        <h2>Sección 2</h2>
      </section>
      <section>
        <h2>Banners publicitarios</h2>
      </section>
    </div>
  );
};

export default Home;
