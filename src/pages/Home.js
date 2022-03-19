import React from "react";
import Category from "../components/ui/Category";
import HomeSlider from "../components/ui/HomeSlider";

const Home = () => {
  return (
    <section className="min-h-full">
      <HomeSlider />
      <Category />
    </section>
  );
};

export default Home;
