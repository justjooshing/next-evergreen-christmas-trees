import indexStyles from "../../styles/index.module.css";

const Annoucements = ({ announcements }) => {
  return (
    <section
      className={`${indexStyles.introduction} ${indexStyles.dad_announcement}`}
    >
      <h3>Hello everyone!</h3>
      {announcements.map(({ value, _id }) => (
        <p key={_id}>{value}</p>
      ))}
    </section>
  );
};

export default Annoucements;
