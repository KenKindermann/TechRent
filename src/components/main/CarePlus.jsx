// Images
import destruction from "../../assets/icons/destruction_FILL0_wght400_GRAD0_opsz24.svg";
import wrist from "../../assets/icons/wrist_FILL0_wght400_GRAD0_opsz24.svg";
import factory from "../../assets/icons/factory_FILL0_wght400_GRAD0_opsz24.svg";

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
          <img src={destruction} alt="destruction icon" />
          <p>Screen Damage</p>
        </li>

        <li className="flex flex-col items-center">
          <img src={wrist} alt="wrist icon" />
          <p>Theft & Lost</p>
        </li>

        <li className="flex flex-col items-center">
          <img src={factory} alt="factory icon" />
          <p>Factory failures</p>
        </li>
      </ul>
      <p>Read more.</p>
    </section>
  );
};
export default CarePlus;
