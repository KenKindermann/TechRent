// Hooks
import { useContext } from "react";

// Context
import { PopupContext } from "../../provider/PopupContext";

const usePopup = () => {
  const { showPopup, setShowPopup, setDarkBackground } = useContext(PopupContext);

  // Open popup and show dark background
  const openPopup = (component) => {
    setShowPopup(component);
    setDarkBackground(true);
  };

  // Close popup and hide dark background
  const closePopup = () => {
    setShowPopup(false);
    setDarkBackground(false);
  };

  return { showPopup, openPopup, closePopup };
};

export default usePopup;
