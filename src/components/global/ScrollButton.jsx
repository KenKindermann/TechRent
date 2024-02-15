const ScrollButton = ({ direction, value, scroll }) => {
  return (
    <div
      className={`absolute top-1/2 ${direction}-4 -translate-y-1/2 bg-slate-700 bg-opacity-70 rounded-full w-10 h-10 flex shadow-white shadow-sm justify-center items-center cursor-pointer`}
      onClick={() => scroll(value)}
    >
      <img src={`/src/assets/icons/chevron_${direction}_FILL0_wght400_GRAD0_opsz24.svg`} alt="chevron icon" />
    </div>
  );
};

export default ScrollButton;
