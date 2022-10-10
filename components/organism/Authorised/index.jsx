import { signOut } from "next-auth/react";

import InputComponent from "../../molecule/InputComponent";

import style from "./Authorised.module.scss";

const Authorised = () => {
  const signOutText = "Sign Out";
  return (
    <>
      <div className={style.auth}>
        <button className={style.auth__button} onClick={signOut}>
          {signOutText}
        </button>
      </div>
      <section className={style.current}>
        {["alerts", "announcements", "basePrice", "pricePerFoot"].map(
          (type) => (
            <InputComponent key={type} type={type} />
          )
        )}
      </section>
    </>
  );
};

export default Authorised;
