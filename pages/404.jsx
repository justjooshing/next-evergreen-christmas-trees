import NotFound from "../components/pages/NotFound";
import PageWrapper from "../components/utils/PageWrapper";

export const getStaticProps = () => ({
  props: { pageName: "404 - Not found" },
});

const custom404 = () => (
  <PageWrapper>
    <NotFound />
  </PageWrapper>
);

export default custom404;
