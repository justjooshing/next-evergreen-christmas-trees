import { signOut } from "next-auth/client";

import Alert from "./Alert";
import Announcements from "./Announcements";
import Price from "./Price";

import adminStyle from "../../styles/Admin.module.css";

const Authorised = () => {
  return (
    <>
      <div className={adminStyle.auth_wrapper}>
        <button className={adminStyle.auth_button} onClick={signOut}>
          Sign out{" "}
        </button>
      </div>
      <section className={adminStyle.current}>
        <Alert />
        <Announcements />
        <Price />
      </section>
    </>
  );
};

export default Authorised;
