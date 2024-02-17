const CarePlus = ({ priceWithCarePlus, setPriceWithCarePlus, carePlusPrice }) => {
  return (
    <div className="flex items-center gap-2 mt-6">
      <input
        className="accent-slate-700"
        type="checkbox"
        key={window.location.pathname}
        onClick={() => setPriceWithCarePlus(!priceWithCarePlus)}
      />
      <p>Care+ Only {carePlusPrice}€ per month. Conditions here.</p>
    </div>
  );
};

export default CarePlus;
