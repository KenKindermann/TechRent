const Colors = ({ colors, currentColor, setCurrentColor }) => {
  return (
    <div>
      <h3 className="text-xl mt-6">Colors</h3>
      {colors.map((color) => (
        <button
          key={color}
          className={`mr-4 px-4 py-2 ${currentColor === color ? `bg-highlight` : `bg-slate-800`}`}
          onClick={() => setCurrentColor(color)}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default Colors;
