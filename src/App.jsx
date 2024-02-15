import "./App.css";
import Popup from "./components/global/Popup";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="page-content bg-gradient-to-b from-dark-blue to-stone-800 text-white font-roboto">
      <Navbar />
      <Popup />
    </div>
  );
}

export default App;
