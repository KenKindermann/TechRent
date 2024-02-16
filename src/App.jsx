// CSS
import "./App.css";

// Hooks
import { useEffect } from "react";

// Router
import { Route, Routes, useLocation } from "react-router-dom";

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
import DarkBackground from "./components/global/DarkBackground";
import Footer from "./components/footer/Footer";
import ProductView from "./components/product-page/ProductView";

function App() {
  const { pathname } = useLocation();

  /* Scroll to page start when pathname changes */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="page-content bg-gradient-to-b from-dark-blue to-stone-800 text-white font-roboto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/:productGroup/:title/:id" element={<ProductView key={window.location.pathname} />} />
      </Routes>

      <ProductOverview title={"Deals of the Week"} productGroup={"dealsOfTheWeek"} />
      <CarePlus />
      <ProductOverview title={"Popular"} productGroup={"popular"} />
      <Newsletter />
      <Benefits />
      <Popup />
      <Contact />
      <Faq />
      <DarkBackground />
      <Footer />
    </div>
  );
}

export default App;
