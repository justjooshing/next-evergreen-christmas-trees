import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/actions";

import CustomHead from "../components/Global/CustomHead";
import faqsList from "../components/config/faqsList";

import faqsStyle from "../styles/FAQs.module.css";

const faqs = () => {
  const pageName = "FAQs";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(pageName));
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
