// CSS
import "./App.css";

// Router
import { Route, Routes } from "react-router-dom";

// Components
import Popup from "./components/global/Popup";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/main/Hero";
import ProductOverview from "./components/main/ProductOverview";
import CarePlus from "./components/main/CarePlus";
import Newsletter from "./components/main/Newsletter";
import Benefits from "./components/main/Benefits";
import Contact from "./components/main/Contact";
import Faq from "./components/main/Faq";

function App() {
  return (
    <div className="page-content bg-gradient-to-b from-dark-blue to-stone-800 text-white font-roboto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>

      <ProductOverview title={"Deals of the Week"} productGroup={"dealsOfTheWeek"} />
      <CarePlus />
      <ProductOverview title={"Popular"} productGroup={"popular"} />
      <Newsletter />
      <Benefits />
      <Popup />
      <Contact />
      <Faq />
    </div>
  );
}

export default App;
