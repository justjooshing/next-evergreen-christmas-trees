import { connectToDatabase } from "../util/mongodb";

import DeletePost from "../components/Admin/DeletePost";
import CustomHead from "../components/Global/CustomHead";

import adminStyle from "../styles/Admin.module.css";

const admin = ({ announcements, parsePrice }) => {
  const pageName = "admin";

  return (
    <>
      <CustomHead pageName={pageName} />
      <section>
        {/* <form className={adminStyle.form}>
          <input
            type="textarea"
            name="update"
            rows="50"
            cols="30"
            placeholder="Submit new announcement"
            spellCheck
          />
          <button type="submit">Submit</button>
        </form> */}
        <div className={adminStyle.current}>
          <section>
            <h3>Annoucements</h3>
            {announcements.length > 0 ? (
              announcements.map(({ value, _id }) => (
                <div key={_id} className={adminStyle.announcement}>
                  <p>{value}</p>
                  <DeletePost postId={_id} />
                </div>
              ))
            ) : (
              <h5>No annoucements currently</h5>
            )}
          </section>
          <section>
            <h3>Current Price</h3>
            <p className={adminStyle.price}>${parsePrice.value} per foot</p>
          </section>
        </div>
      </section>
    </>
  );
};

export default admin;

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const getAnnouncements = await db.collection("message").find({}).toArray();
  const announcements = JSON.parse(JSON.stringify(getAnnouncements));

  // I know this can be better, as returning an array
  // and then taking [0] from that is a bit convoluted
  const getPrice = await db.collection("price").find({}).toArray();
  const parsePrice = JSON.parse(JSON.stringify(getPrice))[0];

  return {
    props: { announcements, parsePrice },
  };
}
