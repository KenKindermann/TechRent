import { useContext, useState } from "react";

// Context
import { PopupContext } from "../../provider/PopupContext";

const Searchbar = () => {
  const [searchResults, setSearchResults] = useState(false);
  const { showSearch, setShowSearch, setDarkBackground } = useContext(PopupContext);

  const searchProduct = (event) => {
    const searchInput = event.target.value.toLowerCase();
    const allProducts = Object.values(products).flatMap((productList) => productList);
    const result = allProducts.filter((product) => product.fields.title.toLowerCase().includes(searchInput));
    setSearchResults(result);
  };

  return (
    <>
      <div className="w-full relative">
        <input
          type="search"
          onClick={() => {
            setShowSearch(true), setDarkBackground(true);
          }}
          className="outline-none w-full bg-white p-2"
          placeholder="Search..."
          onChange={(event) => searchProduct(event)}
        />
      </div>
    </>
  );
};

export default Searchbar;
