import { createContext, useState } from "react";

export const ProductContext = createContext();

export const Provider = ({ children }) => {
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

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
