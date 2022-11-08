import Community from "../components/pages/Community";
import PageWrapper from "../components/utils/PageWrapper";

export const getStaticProps = () => ({
  props: { pageName: "Community" },
});

const CommunityPage = () => (
  <PageWrapper>
    <Community />
  </PageWrapper>
);

export default CommunityPage;
