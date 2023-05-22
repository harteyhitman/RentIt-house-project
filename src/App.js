import React from "react";
import "./index.css";
import "./App.css";
import Login from "./components/Login";
import RentItButton from "./components/RentItButton";
import HambuggerMenu from "./components/HambuggerMenu";
import DiscoverAndText from "./components/DiscoverAndText";
import PriceTagModal from "./modal/PriceTagModal";
import SearchModal from "./modal/SearchModal";
import FirstHouse from "./MidSection/FirstHouse";
import SecondHouse from "./MidSection/SecondHouse";
import ThirdHouse from "./MidSection/ThirdHouse";
import ThirdHouseText from "./MidSection/ThirdHouseText";
import FourthHouse from "./MidSection/FourthHouse";
import FooterDesign from "./footer/FooterDesign";

const App = () => {
  return (
    <div className="App">
      <div>
        <Login />
      </div>
      <div className="container">
        <div className="menu">
          <RentItButton />
          
          <HambuggerMenu />
        </div>
        <DiscoverAndText />
        <PriceTagModal />
        <SearchModal />
        <FirstHouse />
        <SecondHouse />
        <ThirdHouse />
      </div>
      <ThirdHouseText/>
      <FourthHouse/>
      <FooterDesign/>
      
    </div>
  );
};

export default App;
