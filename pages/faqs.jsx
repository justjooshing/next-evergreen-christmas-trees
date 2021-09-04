import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/actions";

import PageWrapper from "../components/atom/PageWrapper";
import Faqs from "../components/pages/Faqs";

const FaqPage = () => {
  const pageName = "FAQs";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(pageName));
  }, [dispatch]);

  return (
    <PageWrapper pageName={pageName}>
      <Faqs />
    </PageWrapper>
  );
};

export default FaqPage;
