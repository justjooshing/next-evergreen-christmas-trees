import CustomHead from "../components/Global/CustomHead";
import faqsList from "../components/config/faqsList";

import faqsStyle from "../styles/FAQs.module.css";

const faqs = () => (
  <div className={faqsStyle.main}>
    <CustomHead pageName="FAQs" />
    <h3>Frequenly Asked Questions</h3>
    {faqsList.map((faq) => (
      <details>
        <summary>
          <h4>{faq.question}</h4>
        </summary>
        {faq.answer}
      </details>
    ))}
  </div>
);

export default faqs;
