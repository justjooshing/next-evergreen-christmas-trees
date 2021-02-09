import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Test</span>
      </h1>
    </div>
  );
};

export default Header;
