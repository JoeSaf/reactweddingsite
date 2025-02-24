import React from "react";
import Slider from "./Slider";
import Content from "./Content";

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <Slider />
      <Content />
    </div>
  );
};

export default Banner;
