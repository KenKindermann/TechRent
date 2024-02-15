// Hooks
import { useState } from "react";

// Data
import FaqQuestions from "../../data/FaqQuestions";

// Components
import Question from "./Question";

const Faq = () => {
  const [openAnswer, setOpenAnswer] = useState(null);

  return (
    <section id="faq" className="kk-section">
      <h2 className="text-2xl mb-4">FAQ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
        <div>
          {FaqQuestions.map((question, index, self) =>
            index < self.length / 2 ? (
              <Question key={question.id} data={question} openAnswer={openAnswer} setOpenAnswer={setOpenAnswer} />
            ) : undefined
          )}
        </div>
        <div>
          {FaqQuestions.map((question, index, self) =>
            index >= self.length / 2 ? (
              <Question key={question.id} data={question} openAnswer={openAnswer} setOpenAnswer={setOpenAnswer} />
            ) : undefined
          )}
        </div>
      </div>
    </section>
  );
};

export default Faq;
