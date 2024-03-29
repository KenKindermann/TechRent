const CarePlus = () => {
  return (
    <section id="care-plus" className="kk-section flex flex-col justify-center items-center gap-4">
      <h2 className="text-3xl sm:text-4xl text-center font-bold text-highlight">Care+</h2>
      <ul className="text-center text-4xl sm:text-5xl font-bold flex flex-col lg:flex-row gap-2">
        <li>More Freedom.</li>
        <li>More Safety.</li>
        <li>Carefree.</li>
      </ul>

      {/* Benefits */}
      <ul className="flex gap-8 text-lg text-center">
        <li className="flex flex-col items-center">
          <img src="/assets/icons/destruction_FILL0_wght400_GRAD0_opsz24.svg" alt="destruction icon" />
          <p>Screen Damage</p>
        </li>

        <li className="flex flex-col items-center">
          <img src="/assets/icons/wrist_FILL0_wght400_GRAD0_opsz24.svg" alt="wrist icon" />
          <p>Theft & Lost</p>
        </li>

        <li className="flex flex-col items-center">
          <img src="/assets/icons/factory_FILL0_wght400_GRAD0_opsz24.svg" alt="factory icon" />
          <p>Factory failures</p>
        </li>
      </ul>
      <p>Read more.</p>
    </section>
  );
};
export default CarePlus;
