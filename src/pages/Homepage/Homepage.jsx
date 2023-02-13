import React from "react";
import ReactSlider from "../../components/Slider/Slider";
import Design from "../../components/Design/Design";
import Services from "../../components/Services/Services";
import Counter from "../../components/Counters/Counter";
import Work from "../../components/Works/Work";
import Blog from "../../components/Blogs/Blog";

const Homepage = () => {
  return (
    <>
      <ReactSlider />
      <Design />
      <Services />
      <Counter />
      <Work />
      <Blog />
    </>
  );
};

export default Homepage;
