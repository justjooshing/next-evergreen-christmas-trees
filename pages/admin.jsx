import { connectToDatabase } from "../util/mongodb";

import DeletePost from "../components/Admin/DeletePost";

import adminStyle from "../styles/Admin.module.css";

const admin = ({ announcements, parsePrice }) => {
  return (
    <section className={adminStyle.main}>
      <section>
        <h3>Annoucements</h3>
        {announcements.map(({ value, id }) => (
          <p key={id}>
            {value} <DeletePost postId={id} key={`delete:${id}`} />
          </p>
        ))}
      </section>
      <section>
        <h3>Current Price</h3>
        <p>${parsePrice.value} per foot</p>
      </section>
    </section>
  );
};

export default admin;

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const getAnnouncements = await db.collection("message").find({}).toArray();
  const announcements = JSON.parse(JSON.stringify(getAnnouncements));
  // I know this can be better, returning an array
  // and then taking [0] from that is dumb
  const getPrice = await db.collection("price").find({}).toArray();
  const parsePrice = JSON.parse(JSON.stringify(getPrice))[0];

  return {
    props: { announcements, parsePrice },
  };
}
