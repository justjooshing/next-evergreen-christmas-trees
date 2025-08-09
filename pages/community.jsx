import Community from "../components/pages/Community";

export const getStaticProps = () => ({
  props: { pageName: "Community" },
});

const CommunityPage = () => <Community />;

export default CommunityPage;
