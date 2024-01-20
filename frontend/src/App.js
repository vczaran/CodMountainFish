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

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/captain-and-vessel" element={<CaptainAndVessel />} />
        <Route path="/directions" element={<Directions />} />
        <Route path="/fish-report" element={<FishReport />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
      {/* Footer? */}
    </div>
  );
}

export default App;
