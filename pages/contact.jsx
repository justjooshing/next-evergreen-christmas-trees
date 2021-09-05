import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Contact from "../components/pages/Contact";
import PageWrapper from "../components/utils/PageWrapper";
import { setPage } from "../redux/actions";


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
