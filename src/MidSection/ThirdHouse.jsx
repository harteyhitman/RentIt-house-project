import React from "react";
import Checkout from "../MidSection/checkout.png";

const ThirdHouse = () => {
  return (
    <div className="third-house">
      <div className="third-container">
        <span>
          <p className="verified">Verified</p>
          <img className="checkout" src={Checkout} alt="" />
        </span>
        <h2>#25, Somewhere in Lagos Avenue.Lagos Island.</h2>
        <div className="paragraph">
          <p>2 Bathroom</p>
          <p>2 Bathroom</p>
        </div>
        <div className="grand-price">N50,732,234.00</div>
      </div>
      
    </div>
  );
};

export default ThirdHouse;
