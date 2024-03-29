// Hooks
import { useContext, useState, useRef, useCallback } from "react";
import useOverflow from "../../hooks/useOverflow";

// Context
import { ProductContext } from "../../provider/ProductContext";

// Components
import ScrollButton from "../global/ScrollButton";
import Product from "../global/Product";

const ShoppingCart = () => {
  const { shoppingCart } = useContext(ProductContext);
  const [overflow, setOverflow] = useState(false);
  const overflowContainer = useRef();

  useOverflow(overflowContainer, setOverflow);

  const scroll = useCallback(
    (value) => {
      overflowContainer.current.scrollLeft += value;
    },
    [overflowContainer]
  );

  return (
    <div className="relative py-12 flex flex-col gap-8 items-center">
      <h2 className="text-xl">Warenkorb</h2>
      <div
        ref={overflowContainer}
        className="overflow-x-scroll scroll-smooth w-full hide-scrollbar relative"
        style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
      >
        <div className="min-w-max">
          <div className="flex gap-4 justify-center">
            {shoppingCart.length > 0 ? (
              shoppingCart.map((product) => <Product key={product.id} product={product} quantity={product.quantity} />)
            ) : (
              <p>Keine Artikel auf der Wunschliste.</p>
            )}
          </div>
        </div>
      </div>
      {overflow && (
        <>
          <ScrollButton direction={"left"} value={-250} scroll={scroll} />
          <ScrollButton direction={"right"} value={250} scroll={scroll} />
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
