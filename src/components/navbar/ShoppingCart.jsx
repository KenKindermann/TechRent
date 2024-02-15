// Hooks
import { useContext } from "react";

// Context
import { ProductContext } from "../../provider/ProductContext";

const ShoppingCart = () => {
  const { shoppingCart } = useContext(ProductContext);

  return (
    <div className="relative py-12 flex flex-col gap-8 items-center">
      <h2 className="text-xl font-bold">Shopping cart</h2>
      <div
        ref={overflowContainer}
        className="overflow-x-scroll scroll-smooth w-full hide-scrollbar relative"
        style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
      ></div>
    </div>
  );
};

export default ShoppingCart;
