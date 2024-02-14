// Hooks
import { useContext } from "react";

// Context
import { ProductContext } from "../../provider/ProductContext";

// Images
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const { wishList, shoppingCart, showSearch } = useContext(ProductContext);

  return (
    <nav className="bg-slate-700 shadow-md shadow-slate-600 bg-opacity-20 w-full">
      <div className="navbar flex items-center justify-between max-w-screen-2xl mx-auto p-4 gap-4">
        <div className={`flex shrink-[3] gap-8 w-full sm:w-3/4 lg:w-5/12 ${showSearch && `z-10`} relative text-black`}>
          <img
            src={logo}
            alt="Tech Rental Logo"
            width={"60px"}
            onClick={() => navigate("/")}
            className="cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
