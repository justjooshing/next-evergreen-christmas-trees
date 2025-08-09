import Faqs from "../components/pages/Faqs";

export const getStaticProps = () => ({
  props: { pageName: "FAQs" },
});
const FaqPage = () => <Faqs />;

export default FaqPage;
