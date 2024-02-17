// Hooks
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import usePopup from "../../hooks/usePopup";

// Context
import { ProductContext } from "../../provider/ProductContext";

// Images
import logo from "/assets/images/logo.png";

// Components
import NavbarLinks from "./NavbarLinks";
import Searchbar from "./Searchbar";
import Badge from "../global/Badge";
import ToggleBar from "./Togglebar";

const Navbar = () => {
  const { wishList, shoppingCart, showSearch } = useContext(ProductContext);
  const { openPopup } = usePopup();
  const [showMobileNav, setShowMobileNav] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="bg-slate-700 shadow-md shadow-slate-600 bg-opacity-20 w-full">
      <div className="navbar flex items-center justify-between max-w-screen-2xl mx-auto p-4 gap-4">
        {/* Logo and Searchbar */}
        <div className={`flex shrink-[3] gap-8 w-full sm:w-3/4 lg:w-5/12 ${showSearch && `z-10`} relative text-black`}>
          <img
            src={logo}
            alt="Tech Rental Logo"
            width={"60px"}
            onClick={() => navigate("/")}
            className="cursor-pointer"
          />
          <Searchbar />
        </div>

        {/* Nav links */}
        <NavbarLinks showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} />

        <div
          className={
            showMobileNav ? `absolute top-3 left-1/2 -translate-x-1/2 flex gap-4 ` : `flex gap-4 hidden sm:flex`
          }
        >
          {/* Wishlist */}
          <div className="my-auto relative w-6" onClick={() => openPopup("wishList")}>
            {wishList.length > 0 && <Badge />}
            <img
              src="/assets/icons/favorite_FILL0_wght400_GRAD0_opsz24.svg"
              alt="wishlist icon"
              className="cursor-pointer"
            />
          </div>

          {/* Shopping cart */}
          <div className="my-auto relative w-6" onClick={() => openPopup("shoppingCart")}>
            {shoppingCart.length > 0 && <Badge />}
            <img
              src="/assets/icons/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg"
              alt="shopping cart icon"
              className="cursor-pointer"
            />
          </div>

          {/* Sign up */}
          <button className="btn whitespace-nowrap cursor-pointer" onClick={() => openPopup("signIn")}>
            Sign up
          </button>
        </div>

        {/* Toggle Button */}
        <ToggleBar setShowMobileNav={setShowMobileNav} />
      </div>
    </nav>
  );
};

export default Navbar;
