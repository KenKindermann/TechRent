// Hooks
import { useContext } from "react";

// Context
import { PopupContext } from "../../provider/PopupContext";

// Components
import WishList from "../navbar/WishList";
import ShoppingCart from "../navbar/ShoppingCart";
import SignIn from "../navbar/SignIn";
import Login from "../navbar/Login";

const Popup = () => {
  const { showPopup, setShowPopup, setDarkBackground } = useContext(PopupContext);

  // Components to render
  const components = {
    wishList: WishList,
    shoppingCart: ShoppingCart,
    signIn: SignIn,
    login: Login,
  };

  const ComponentToRender = components[showPopup];

  return (
    showPopup && (
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full md:w-3/4 min-h-112 bg-slate-800 bg-opacity-95 shadow-md shadow-slate-400 animate-fade-in ">
        {showPopup && <ComponentToRender />}
        <img
          src="/src/assets/icons/close_FILL0_wght400_GRAD0_opsz24.svg"
          alt=""
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => {
            setShowPopup(false), setDarkBackground(false);
          }}
        />
      </div>
    )
  );
};

export default Popup;
