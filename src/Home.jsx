import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./components/Common";
import img1 from "./img/Select.png";

const Home = () => {
  return (
    <>
      <Common
        title="Grow your business with"
        btnName="get Started"
        img={img1}
      />
    </>
  );
};

export default Home;
