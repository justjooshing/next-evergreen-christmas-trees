import Footer from "./Footer";
import Header from "./Header";

import layoutStyles from "../styles/Layout.module.css";

const Layout = ({ children }) => (
  <>
    <Header />
    {/* Main changes, but background, text fonts and colors stay the same */}
    <main className={layoutStyles.main}>{children}</main>
    {/* Footer stays the same on all pages */}
    <Footer />
  </>
);

export default Layout;
