import Markdown from "react-markdown";

import styles from "./Announcements.module.scss";

const Announcements = ({ announcements }) => {
  console.log(announcements);
  return (
    <section className={`${styles.introduction} ${styles.dad_announcement}`}>
      {announcements.map(({ fields: { announcement }, id }) => (
        <Markdown key={id}>{announcement}</Markdown>
      ))}
    </section>
  );
};

export default Announcements;
