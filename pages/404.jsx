import PageWrapper from "../components/utils/PageWrapper";
import NotFound from "../components/pages/NotFound";

export default function custom404() {
  const pageName = "404 - Not Found";

  return (
    <PageWrapper pageName={pageName}>
      <NotFound />
    </PageWrapper>
  );
}
