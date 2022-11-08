import Faqs from "../components/pages/Faqs";
import PageWrapper from "../components/utils/PageWrapper";

export const getStaticProps = () => ({
  props: { pageName: "FAQs" },
});
const FaqPage = () => (
  <PageWrapper>
    <Faqs />
  </PageWrapper>
);

export default FaqPage;
