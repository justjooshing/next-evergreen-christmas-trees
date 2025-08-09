import Contact from "../components/pages/Contact";

export const getStaticProps = () => ({
  props: { pageName: "Contact" },
});
const ContactPage = () => <Contact />;

export default ContactPage;
