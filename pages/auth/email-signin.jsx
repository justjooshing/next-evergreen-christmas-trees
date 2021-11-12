import { csrfToken } from "next-auth/client";

import PageWrapper from "../../components/utils/PageWrapper";
import adminStyle from "../../styles/Admin.module.scss";

export default function SignIn({ csrfToken }) {
  const pageName = "admin";
  return (
    <PageWrapper pageName={pageName}>
      <div>
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
          <button type="submit">Sign in</button>
        </form>
      </div>
    </PageWrapper>
  );
}

SignIn.getInitialProps = async (context) => {
  return {
    csrfToken: await csrfToken(context),
  };
};
