import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/actions";

import PageWrapper from "../components/atom/PageWrapper";
import Contact from "../components/pages/Contact";

const ContactPage = () => {
  const pageName = "Contact";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(pageName));
  }, [dispatch]);

  return (
    <PageWrapper pageName={pageName}>
      <Contact />
    </PageWrapper>
  );
};

export default ContactPage;
