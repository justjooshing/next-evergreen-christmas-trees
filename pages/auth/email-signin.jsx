import { csrfToken } from "next-auth/client";
import CustomHead from "../../components/Global/CustomHead";

import adminStyle from "../../styles/Admin.module.css";
import admin from "../admin";

export default function SignIn({ csrfToken }) {
  const pageName = "admin";
  return (
    <>
      <CustomHead pageName={pageName} />
      <div className={adminStyle.auth_wrapper}>
        <h3>Not currently signed in</h3>
        <form
          method="post"
          action="/api/auth/signin/email"
          className={adminStyle.login_page}
        >
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <label>
            Email address:
            <input type="text" id="email" name="email" />
          </label>
          <button type="submit" className={adminStyle.auth_button}>
            Sign in
          </button>
        </form>
      </div>
    </>
  );
}

SignIn.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context),
  };
};
