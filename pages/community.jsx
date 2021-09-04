import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/actions";

import PageWrapper from "../components/utils/PageWrapper";
import Community from "../components/pages/Community";

const CommunityPage = () => {
  const pageName = "Community";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(pageName));
  }, [dispatch]);

  return (
    <PageWrapper pageName={pageName}>
      <Community />
    </PageWrapper>
  );
};

export default CommunityPage;
