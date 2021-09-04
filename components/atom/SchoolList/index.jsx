import { schoolList } from "../../config/schools";

import style from "./SchoolsList.module.scss";

const SchoolList = () => (
  <section className={style.schools}>
    <h3>Schools and organisations we support:</h3>
    <ul>
      {schoolList.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  </section>
);

export default SchoolList;
