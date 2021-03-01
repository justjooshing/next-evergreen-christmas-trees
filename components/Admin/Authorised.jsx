import { signOut } from "next-auth/client";

import Announcements from "./Announcements";
import Price from "./Price";

import adminStyle from "../../styles/Admin.module.css";

const Authorised = () => {
  return (
    <section className={adminStyle.current}>
      <Announcements />
      <Price />
      <button onClick={signOut}>Sign out</button>
    </section>
  );
};

export default Authorised;
