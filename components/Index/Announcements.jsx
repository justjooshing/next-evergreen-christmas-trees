import indexStyles from "../../styles/index.module.css";

const Announcements = ({ announcements }) => {
  return (
    <section
      className={`${indexStyles.introduction} ${indexStyles.dad_announcement}`}
    >
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
