import CustomHead from "../components/CustomHead";
import { pageCards } from "../components/config/indexPageLinks";
import Card from "../components/Card";

import style from "../styles/index.module.css";

export default function Home() {
  return (
    <>
      <CustomHead pageName="Home" />
      <h1>Home Page</h1>
      <section className={style.card_grid_wrapper}>
        {pageCards.map((card) => (
          <Card card={card} key={card.fig_caption} />
        ))}
      </section>
    </>
  );
}
