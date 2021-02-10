import Footer from "./Footer";
import Header from "./Header";

import layoutStyles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    // .container styles sets header and footer
    <div className={layoutStyles.container}>
      {/* Header stays the same aside from maybe which tab they're on (selected state) */}
      <Header />
      {/* Main changes, but background, text fonts and colors stay the same */}
      <main className={layoutStyles.main}>{children}</main>
      {/* Footer stays the same on all pages */}
      <Footer />
    </div>
  );
};

export default Layout;
