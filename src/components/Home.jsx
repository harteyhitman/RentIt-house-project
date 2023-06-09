import React, { useState } from "react";
import Button from "./Button";
import SignInModal from "./SignInModal";
import RentItButton from "./RentItButton";
import HambuggerMenu from "./HambuggerMenu";
import DiscoverAndText from "./DiscoverAndText";
import PriceTagModal from "../modal/PriceTagModal";
import SearchModal from "../modal/SearchModal";
import FirstHouse from "../MidSection/FirstHouse";
import SecondHouse from "../MidSection/SecondHouse";
import ThirdHouse from "../MidSection/ThirdHouse";
import ThirdHouseText from "../MidSection/ThirdHouseText";
import FourthHouse from "../MidSection/FourthHouse";
import FooterDesign from "../footer/FooterDesign";
import { Link } from "react-router-dom";


const Login = () => {
  const [openModal, setopenModal] = useState(false);
 

  return (
    <div>
      <div className="sign-in-posting">
        <Button onClick={()=>{setopenModal(true)}} className="signin sign" label="Log In" />
        <Button
        onClick={()=>{setopenModal(true)}}
          className="signin posting"
          label="Make a posting"
        />
      </div>
      {openModal && <SignInModal closeModal={setopenModal}/>}
      <div className="App">
      <div></div>
      <div className="container">
        <div className="menu">
          <Link to="auth">
            <RentItButton />
          </Link>
          <HambuggerMenu />
        </div>
        <DiscoverAndText />
        <PriceTagModal />
        <SearchModal />
        <FirstHouse />
        <SecondHouse />
        <ThirdHouse />
      </div>
      <ThirdHouseText />
      <FourthHouse />
      <FooterDesign />
    </div>
    </div>
  );
};

export default Login;
