// Hooks
import { useContext, useState } from "react";

// Context
import { PopupContext } from "../../provider/PopupContext";
import { ProductContext } from "../../provider/ProductContext";

// Components
import SearchResult from "./SearchResult";

const Searchbar = () => {
  const [searchResults, setSearchResults] = useState(false);
  const { showSearch, setShowSearch, setDarkBackground } = useContext(PopupContext);
  const { products } = useContext(ProductContext);

  const searchProduct = (event) => {
    const searchInput = event.target.value.toLowerCase();
    const allProducts = Object.values(products).flatMap((productList) => productList);
    const result = allProducts.filter((product) => product.fields.title.toLowerCase().includes(searchInput));
    setSearchResults(result);
  };

  return (
    <>
      <div className="w-full relative z-10">
        <input
          type="search"
          onClick={() => {
            setShowSearch(true), setDarkBackground(true);
          }}
          className="outline-none w-full bg-white p-2"
          placeholder="Search..."
          onChange={(event) => searchProduct(event)}
        />
        {!showSearch && (
          <img
            src="/assets/icons/search_FILL0_wght400_GRAD0_opsz24.svg"
            alt="search icon"
            className="absolute right-1 top-2 animate-fade-in"
          />
        )}
        {showSearch && (
          <div className="absolute bg-white shadow-md shadow-white animate-fade-in w-full top-10 z-10">
            <hr />
            {!searchResults
              ? products.dealsOfTheWeek.map((product) => <SearchResult key={product.fields.id} product={product} />)
              : searchResults.map((product) => <SearchResult product={product} />)}
          </div>
        )}
      </div>
    </>
  );
};

export default Searchbar;
