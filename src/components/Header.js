import { slide as Menu } from "react-burger-menu";
import HorizontalMenu from "./HorizontalMenu";
const Header = () => {
  return (
    <>
      <div className="warning">Esto es una versión beta</div>;
      <HorizontalMenu />
      <Menu width={280}>
        <a className="menu__item" href="/">
          Home
        </a>
      </Menu>
      <div className="hero"></div>;
    </>
  );
};

export default Header;
