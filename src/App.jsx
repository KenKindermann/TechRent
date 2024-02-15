// CSS
import "./App.css";

// Router
import { Route, Routes } from "react-router-dom";

// Components
import Popup from "./components/global/Popup";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/main/Hero";

function App() {
  return (
    <div className="page-content bg-gradient-to-b from-dark-blue to-stone-800 text-white font-roboto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <Popup />
    </div>
  );
}

export default App;
