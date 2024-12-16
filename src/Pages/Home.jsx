import React from "react";
import Hero from "../components/Hero/Hero";
import Title from "../components/Title";
import Feature from "../components/Features/Feature";
import Pricing from "../components/Pricing/Pricing";
import HomeGallery from "../components/Gallery/HomeGallery";
import Testimonials from "../components/Testimonial/Testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      <section>
        <Title title="WHAT WE OFFER" />
        <Feature />
      </section>
      <section>
        <Title title="PRICING" />
        <Pricing />
      </section>
      <section>
        <Title title="GALLERY" />
        <HomeGallery />
      </section>
      <section>
        <Title title="TESTIMONIALS" />
        <Testimonials />
      </section>
    </main>
  );
};

export default Home;
