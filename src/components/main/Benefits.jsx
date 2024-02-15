// Data
import BenefitsData from "../../data/BenefitsData";

// Components
import Benefit from "./Benefit";

const Benefits = () => {
  return (
    <section id="benefits" className="kk-section">
      <h2 className="font-bold text-2xl">Benefits</h2>
      <div>
        {BenefitsData.map((benefit) => (
          <Benefit key={benefit.header} benefit={benefit} />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
