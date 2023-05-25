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
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Auth from "./Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="auth" element={<Auth />} />
        <Route path="rentBtn" element={<RentItButton />} />
      </Routes>
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
    </BrowserRouter>
  );
};

export default App;
