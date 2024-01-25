import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { authenticate } from "./store/session";
import logo from "./logo.svg";
import Navigation from "./components/navbar/Navigation";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Availability from "./pages/Availability";
import Directions from "./pages/Directions";
import FishReport from "./pages/FishReport";
import CaptainAndVessel from "./pages/CaptainAndVessel";
import Recipes from "./pages/Recipes";
import Footer from "./components/Footer/Footer";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);
  return (
    <div>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/availability" element={<Availability />} />
            <Route path="/captain-and-vessel" element={<CaptainAndVessel />} />
            <Route path="/directions" element={<Directions />} />
            <Route path="/fish-report" element={<FishReport />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/captain" element={<LoginPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
