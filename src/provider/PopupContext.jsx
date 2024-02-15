import { createContext, useState } from "react";

export const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [darkBackground, setDarkBackground] = useState(false);

  const value = {
    showSearch,
    setShowSearch,
    darkBackground,
    setDarkBackground,
    showPopup,
    setShowPopup,
  };

  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>;
};
