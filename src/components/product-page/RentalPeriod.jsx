const RentalPeriod = ({ currentPrice, setCurrentPrice, productPrices }) => {
  const rentalPeriods = [
    { label: "1 month", key: "oneMonth" },
    { label: "3 months", key: "threeMonth" },
    { label: "6 months", key: "sixMonth" },
    { label: "12 months", key: "twelveMonth" },
  ];

  return (
    <div>
      <h3 className="text-xl mt-6">Choose your rental period</h3>
      {rentalPeriods.map((period) => (
        <button
          key={rentalPeriods.key}
          className={`mr-4 px-4 py-2 min-w-28 mb-2 sm:mb-0 ${
            currentPrice === productPrices[period.key] ? "bg-highlight" : "bg-slate-800"
          }`}
          onClick={() => setCurrentPrice(productPrices[period.key])}
        >
          {period.label}
        </button>
      ))}
    </div>
  );
};

export default RentalPeriod;
