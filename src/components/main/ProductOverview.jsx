// Hooks
import { useContext, useEffect, useState, useRef, useCallback } from "react";
import useOverflow from "../../hooks/useOverflow.jsx";

// Context
import { ProductContext } from "../../provider/ProductContext";

// Utils
import fetchData from "../../utils/contentfulServices.js";
import Product from "../global/Product.jsx";

// Components
import ScrollButton from "../global/ScrollButton";

const ProductOverview = ({ title, productGroup }) => {
  const { products, setProducts } = useContext(ProductContext);
  const [overflow, setOverflow] = useState(false);
  const overflowContainer = useRef();

  useOverflow(overflowContainer, setOverflow);

  useEffect(() => {
    if (productGroup) {
      fetchData(productGroup).then((res) =>
        setProducts((currentProducts) => ({ ...currentProducts, [productGroup]: res }))
      );
    }
  }, [productGroup]);

  const scroll = useCallback(
    (value) => {
      overflowContainer.current.scrollLeft += value;
    },
    [overflowContainer]
  );

  return (
    <section id={productGroup} className="kk-section">
      <h2 className="text-2xl mb-8 font-bold">{title}</h2>
      <div className="relative">
        <div ref={overflowContainer} className="overflow-scroll hide-scrollbar scroll-smooth">
          <div className="flex gap-2 min-w-max">
            {products &&
              products[productGroup]?.map((product) => <Product key={product.fields.id} product={product.fields} />)}
          </div>
        </div>
        {overflow && (
          <>
            <ScrollButton direction={"left"} value={-250} scroll={scroll} />
            <ScrollButton direction={"right"} value={250} scroll={scroll} />
          </>
        )}
      </div>
    </section>
  );
};

export default ProductOverview;
