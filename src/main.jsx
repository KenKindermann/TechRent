import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./provider/ProductContext.jsx";
import { PopupProvider } from "./provider/PopupContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <PopupProvider>
          <App />
        </PopupProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
