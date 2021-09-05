import NotFound from "../components/pages/NotFound";
import PageWrapper from "../components/utils/PageWrapper";

export default function custom404() {
  const pageName = "404 - Not Found";

  return (
    <PageWrapper pageName={pageName}>
      <NotFound />
    </PageWrapper>
  );
}
