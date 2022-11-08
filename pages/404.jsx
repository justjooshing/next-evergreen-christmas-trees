import NotFound from "../components/pages/NotFound";
import PageWrapper from "../components/utils/PageWrapper";

export const getStaticProps = () => ({
  props: { pageName: "404 - Not found" },
});

const custom404 = ({ pageName }) => (
  <PageWrapper pageName={pageName}>
    <NotFound />
  </PageWrapper>
);

export default custom404;
