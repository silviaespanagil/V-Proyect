import { slide as Menu } from "react-burger-menu";

const Header = () => {
  return (
    <Menu width={280}>
      <a className="menu__item" href="/">
        Home
      </a>
    </Menu>
  );
};

export default Header;
