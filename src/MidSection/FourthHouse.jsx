import React from "react";
import House4 from "../MidSection/house4.png";
import VectorMap from '../MidSection/vectorMap.png'

const FourthHouse = () => {
  return (
    <div>
      <img className="house" src={House4} alt="" />
      <div className="coming-soon">
        <p className="coming-p">coming-soon</p>
        <p>This feature is now available on beta testing</p>
      </div>
      <h2 className="local-area-view">Local Area View</h2>
      <p className="welcome-note">
        Welcome to our apartment rental website! We are dedicated to helping you
        find the perfect place to call home. Our selection of properties
        includes a wide range of options to suit every need and budget.
      </p>
      <img className="vectormap" src={VectorMap} alt="" />
    </div>
  );
};

export default FourthHouse;
