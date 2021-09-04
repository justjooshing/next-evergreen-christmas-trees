import CustomHead from "../../Global/CustomHead";

const PageWrapper = ({ pageName, children }) => (
  <>
    <CustomHead pageName={pageName} />
    {children}
  </>
);

export default PageWrapper;
