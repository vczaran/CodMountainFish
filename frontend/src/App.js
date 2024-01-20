import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/navbar/Navigation";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Availability from "./pages/Availability";
import Directions from "./pages/Directions";
import FishReport from "./pages/FishReport";
import CaptainAndVessel from "./pages/CaptainAndVessel";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/availability" element={<Availability />} />
        <Route exact path="/captain-and-vessel" element={<CaptainAndVessel />} />
        <Route exact path="/directions" element={<Directions />} />
        <Route exact path="/fish-report" element={<FishReport />} />
      </Routes>
    </div>
  );
}

export default App;
