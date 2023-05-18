import React from "react";
import Crunch from "../MidSection/crunch.png";
import Forbes from "../MidSection/forbes.png";
import Entrepreneur from "../MidSection/entrepreneur.png";
import Techtimes from "../MidSection/techtimes.png";
import Wallstreetjournal from "../MidSection/wallstreetjournal.png";
import House1 from "../MidSection/house1.png";

const FirstHouse = () => {
  return (
    <div className="house-con">
      <img className="house one" src={House1} alt="" />
      <p>Trusted by:</p>
      <div className="brands">
        <img className="brand-icons" src={Crunch} alt="" />
        <img className="brand-icons" src={Forbes} alt="" />
        <img className="brand-icons" src={Entrepreneur} alt="" />
        <img className="brand-icons" src={Techtimes} alt="" />
        <img className="brand-icons" src={Wallstreetjournal} alt="" />
      </div>
      <h3>EXPLORE OUR PLATFORM</h3>
      <h2>How it works</h2>
      <p>
        Welcome to our apartment rental website! We are dedicated to helping you
        find the perfect place to call home. Our selection of properties
        includes a wide range of options to suit every need and budget.
      </p>
    </div>
  );
};

export default FirstHouse;
