import Contact from "../components/pages/Contact";
import PageWrapper from "../components/utils/PageWrapper";

export const getStaticProps = () => ({
  props: { pageName: "Contact" },
});
const ContactPage = () => (
  <PageWrapper>
    <Contact />
  </PageWrapper>
);

export default ContactPage;
