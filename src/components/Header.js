import { slide as Menu } from "react-burger-menu";
import HorizontalMenu from "./HorizontalMenu";
const Header = () => {
  return (
    <>
      <HorizontalMenu />
      <Menu width={280}>
        <a className="menu__item" href="/">
          Home
        </a>
      </Menu>
    </>
  );
};

export default Header;
