import NotFound from "../components/pages/NotFound";

export const getStaticProps = () => ({
  props: { pageName: "404 - Not found" },
});

const custom404 = () => <NotFound />;

export default custom404;
