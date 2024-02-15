// Hooks
import { useContext } from "react";

// Context
import { PopupContext } from "../../provider/PopupContext";

const DarkBackground = () => {
  const { darkBackground, setDarkBackground, showSearch, setShowSearch, showPopup, setShowPopup } =
    useContext(PopupContext);

  return (
    <div
      className={darkBackground ? "bg-slate-900 bg-opacity-60 absolute inset-0 w-full z-0 animate-fade-in" : "hidden"}
      onClick={() => {
        setDarkBackground(false), showSearch && setShowSearch(false), showPopup && setShowPopup(false);
      }}
    ></div>
  );
};

export default DarkBackground;
