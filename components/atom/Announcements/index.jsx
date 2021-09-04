import styles from "./Announcements.module.scss";

const Announcements = ({ announcements }) => {
  return (
    <section className={`${styles.introduction} ${styles.dad_announcement}`}>
      <h3>Hello everyone!</h3>
      {announcements
        .filter((announcement) => announcement.visibility)
        .map(({ value, id }) => (
          <p key={id}>{value}</p>
        ))}
    </section>
  );
};

export default Announcements;
