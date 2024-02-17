// Hooks
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Context
import { PopupContext } from "../../provider/PopupContext";

// Utils
import { isObjectInArray, deleteObjectInArray, findIndexInArray } from "../../utils/arrayHelpers.js";
import { ProductContext } from "../../provider/ProductContext.jsx";

const Product = ({ product, quantity }) => {
  const { showPopup, setShowPopup, setDarkBackground } = useContext(PopupContext);
  const { wishList, setWishList, shoppingCart, setShoppingCart } = useContext(ProductContext);

  const navigate = useNavigate();

  // Check if object exists in array and add or remove then
  const addOrRemoveInWishList = (event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    isObjectInArray(wishList, product)
      ? setWishList(deleteObjectInArray(wishList, product))
      : setWishList([...wishList, product]);
  };

  // Change quantity in shoppingCart
  const changeQuantity = (product, value) => {
    const index = findIndexInArray(shoppingCart, product);
    const newItems = [...shoppingCart];
    newItems[index].quantity = parseInt(value);
    setShoppingCart(newItems);
  };

  return (
    <div
      className="product-card text-center bg-slate-700 bg-opacity-20 hover:bg-opacity-40 cursor-pointer transition ease-in-out p-4 flex flex-col w-72 h-112 relative z-0"
      onClick={() => {
        navigate(`${product.group}/${product.title}/${product.id}`),
          showPopup && setShowPopup(false),
          setDarkBackground(false);
      }}
    >
      {/* Product details */}
      <div className="h-2/3 flex items-center">
        <img src={product.images[0]?.fields?.file?.url} />
      </div>
      <div className="h-1/3 flex flex-col justify-between">
        <div>
          <h3 className="font-medium mt-4">{product.title}</h3>
          <p className="text-slate-200 text-sm">{product.description}</p>
        </div>
        <p className="mt-4 text-md">
          ab <span className="line-through text-xl"> {product.prices?.oldPrice}€</span>{" "}
          <span className="text-xl text-highlight font-medium">{product.prices?.twelveMonth}€</span> per month
        </p>
      </div>

      {/* Wishlist heart icon */}
      <img
        src={`${
          wishList.some((wishProduct) => wishProduct.id === product.id)
            ? `/src/assets/icons/favorite_FILLPINK_wght400_GRAD0_opsz24.svg`
            : `/src/assets/icons/favorite_FILL0_wght400_GRAD0_opsz24.svg`
        }`}
        alt="favorite icon"
        className="absolute right-2 top-2 z-10"
        onClick={(event) => addOrRemoveInWishList(event)}
      />
      {/* Change quantity */}
      {quantity && (
        <select
          className="absolute left-2 top-2 z-10 text-white bg-slate-700 outline-none "
          onClick={(event) => event.stopPropagation()}
          defaultValue={product.quantity}
          onChange={(e) => changeQuantity(product, e.target.value)}
        >
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Product;
