// Hooks
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Context
import { ProductContext } from "../../provider/ProductContext.jsx";

// Utils
import { findIndexInArray, isObjectInArray } from "../../utils/arrayHelpers.js";

//Components
import Colors from "./Colors";
import RentalPeriod from "./RentalPeriod";
import ImageGallery from "./ImageGallery";
import CarePlus from "./CarePlus.jsx";
import Delivery from "./Delivery.jsx";

const ProductView = () => {
  const { products, shoppingCart, setShoppingCart } = useContext(ProductContext);
  const { productGroup, id } = useParams();

  // Product states
  const [currentPrice, setCurrentPrice] = useState(null);
  const [priceWithCarePlus, setPriceWithCarePlus] = useState(false);
  const [product, setProduct] = useState(null);
  const [currentColor, setCurrentColor] = useState(null);

  // Button text
  const [buttonText, setButtonText] = useState("Add to cart");

  // Set product informations when products and id is changing
  useEffect(() => {
    if (products) {
      const foundedProduct = products[productGroup].find((product) => product.fields.id == id);
      setProduct(foundedProduct.fields);
      setCurrentPrice(foundedProduct.fields.prices.twelveMonth);
      setCurrentColor(foundedProduct.fields.colors[0]);
    }
  }, [products, id]);

  // Add product to shopping cart, display for 2 sec added in button
  const handleClick = (product) => {
    addToShoppingCart(product);
    setButtonText("Added");
    setTimeout(() => setButtonText("Add to cart"), 2000);
  };

  // Add product to shopping cart
  const addToShoppingCart = (product) => {
    if (isObjectInArray(shoppingCart, product)) {
      const index = findIndexInArray(shoppingCart, product);
      const newItems = [...shoppingCart];
      newItems[index].quantity += 1;
      setShoppingCart(newItems);
    } else {
      product.quantity = 1;
      setShoppingCart([...shoppingCart, product]);
    }
  };

  return (
    product && (
      <>
        <section className="kk-section mt-24 flex flex-col items-center justify-center lg:flex-row gap-8">
          <div className="w-full lg:w-2/5 flex flex-col justify-between">
            <ImageGallery images={product.images} />
          </div>
          <div className="bg-slate-700 bg-opacity-20 w-full lg:w-3/5 p-8">
            <h2 className="text-2xl text-highlight font-medium">{product.title}</h2>
            <p className="text-slate-300">{product.description}</p>
            <Colors colors={product.colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
            <RentalPeriod
              productPrices={product.prices}
              currentPrice={currentPrice}
              setCurrentPrice={setCurrentPrice}
            />
            <CarePlus
              priceWithCarePlus={priceWithCarePlus}
              setPriceWithCarePlus={setPriceWithCarePlus}
              carePlusPrice={product.prices.carePlus}
            />
            <Delivery />

            <p className="mt-16 text-xl">
              only{" "}
              <span className="text-3xl text-highlight font-medium">
                {priceWithCarePlus ? Math.round((currentPrice + product.prices.carePlus) * 100) / 100 : currentPrice}€
              </span>{" "}
              per month
            </p>
            <button className="btn mt-4 min-w-36" onClick={() => handleClick(product)}>
              {buttonText}
            </button>
          </div>
        </section>
      </>
    )
  );
};

export default ProductView;
