import { faqList } from "../../constants";

import style from "./Faqs.module.scss";

const Faqs = () => (
  <div className={style.main}>
    <h3>Frequenly Asked Questions</h3>
    {faqList.map((faq) => (
      <details key={faq.question}>
        <summary>
          <h4>{faq.question}</h4>
        </summary>
        {faq.answer}
      </details>
    ))}
  </div>
);

export default Faqs;
