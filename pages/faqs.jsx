import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Faqs from "../components/pages/Faqs";
import PageWrapper from "../components/utils/PageWrapper";
import { setPage } from "../redux/actions";


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
