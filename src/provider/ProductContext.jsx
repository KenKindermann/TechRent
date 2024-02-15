import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [wishList, setWishList] = useState(JSON.parse(window.localStorage.getItem("TechRentWishList")) || []);
  const [shoppingCart, setShoppingCart] = useState(
    JSON.parse(window.localStorage.getItem("TechRentShoppingCart")) || []
  );

  // Save wishlist in local storage when it changes
  useEffect(() => {
    window.localStorage.setItem("TechRentWishList", JSON.stringify(wishList));
  }, [wishList]);

  // Save shopping cart in local storage when it changes
  useEffect(() => {
    window.localStorage.setItem("TechRentShoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const value = {
    products,
    setProducts,
    wishList,
    setWishList,
    shoppingCart,
    setShoppingCart,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
