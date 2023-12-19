import Markdown from "react-markdown";

import styles from "./Announcements.module.scss";

const Announcements = ({ announcements }) => (
  <section className={`${styles.introduction} ${styles.dad_announcement}`}>
    {announcements.map(({ fields: { announcement }, id }) => (
      <Markdown key={id}>{announcement}</Markdown>
    ))}
  </section>
);

export default Announcements;
