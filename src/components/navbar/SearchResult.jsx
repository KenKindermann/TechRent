// Hooks
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Context
import { PopupContext } from "../../provider/PopupContext";

const SearchResult = ({ product }) => {
  const { setShowSearch, setDarkBackground } = useContext(PopupContext);
  const navigate = useNavigate();

  return (
    <div
      className="flex gap-4 p-2 odd:bg-slate-100 hover:bg-slate-200 cursor-pointer"
      onClick={() => {
        setShowSearch(false);
        setDarkBackground(false);
        navigate(`${product.fields.group}/${product.fields.title}/${product.fields.id}`);
      }}
    >
      <img
        src={product.fields.images[0].fields.file.url}
        alt={product.fields.images[0].fields.title}
        width={"45px"}
        height="auto"
        className="object-contain"
      />
      <div className="flex flex-col justify-center ">
        <p>{product.fields.title}</p>
        <p className="text-slate-600 text-sm">{product.fields.description}</p>
      </div>
    </div>
  );
};

export default SearchResult;
