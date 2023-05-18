import React from "react";
import House2 from "../MidSection/house2.png";

const SecondHouse = () => {
  return (
    <div className="second-house">
      <img className="house two" src={House2} alt="" />
      <div className="class-list">
        <ol>
          <li>Search For Property</li>
          <li>Select Wanted Apartment</li>
          <li>Schedule A Tour</li>
          <li>Book Your Apartment</li>
        </ol>
      </div>
      <div className="featuredprops">
        <h3>FEATURED PROPERTIES</h3>
        <h2 className="we-provide-you">We provide you</h2>
        <h2 className="affordable">Affordable Living In The Heart of the Country</h2>
      </div>
      <div className="section">
        <p className="section-house">Houses</p>
        <p className="section-apartment">Apartment</p>
        <p className="section-land">Land</p>
      </div>
    </div>
  );
};

export default SecondHouse;
