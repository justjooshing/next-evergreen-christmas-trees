import PageWrapper from "../../components/utils/PageWrapper";
import adminStyle from "../../styles/Admin.module.scss";

const SignIn = () => {
  const pageName = "admin";
  return (
    <PageWrapper pageName={pageName}>
      <h3>Not currently signed in</h3>
      <form
        method="post"
        action="/api/auth/signin/email"
        className={adminStyle.login_page}
      >
        <label>
          Email address:
          <input type="text" id="email" name="email" />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </PageWrapper>
  );
};

export default SignIn;
