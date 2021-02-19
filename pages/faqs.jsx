import { useEffect } from "react";

import CustomHead from "../components/Global/CustomHead";
import faqsList from "../components/config/faqsList";

import faqsStyle from "../styles/FAQs.module.css";

const faqs = ({ setWhichPage }) => {
  const pageName = "FAQs";
  useEffect(() => {
    setWhichPage(pageName);
  }, []);

  return (
    <div className={faqsStyle.main}>
      <CustomHead pageName={pageName} />
      <h3>Frequenly Asked Questions</h3>
      {faqsList.map((faq) => (
        <details key={faq.question}>
          <summary>
            <h4>{faq.question}</h4>
          </summary>
          {faq.answer}
        </details>
      ))}
    </div>
  );
};

export default faqs;
