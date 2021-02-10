import CustomHead from "../components/CustomHead";
import { pageLinks } from "../components/config/indexPageLinks";
import Card from "../components/Card";

import style from "../styles/index.module.css";

export default function Home() {
  return (
    <div>
      <CustomHead pageName="Home" />
      <h1>Home Page</h1>
      <section className={style.card_grid_wrapper}>
        {pageLinks.map((link) => (
          <Card link={link} key={link.fig_caption} />
        ))}
      </section>
    </div>
  );
}
