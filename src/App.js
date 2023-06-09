import React from "react";
import "./index.css";
import "./App.css";
import Home from "./components/Home";


import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Auth from "./Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
       
      </Routes>
     
    </BrowserRouter>
  );
};

export default App;
