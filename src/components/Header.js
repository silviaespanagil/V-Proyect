import { slide as Menu } from "react-burger-menu";
import HorizontalMenu from "./HorizontalMenu";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <>
      <div className="warning">Esto es una versión beta</div>
      <Menu width={280}>
        <a className="menu__item" href="/">
          Home
        </a>
        <a className="menu__item" href="/favoritos">
          Favoritos
        </a>
        <a className="menu__item" href="/nosotras">
          About us
        </a>
        <a className="menu__item" href="/sugerencias">
          Sugerencias
        </a>
        <a className="menu__item" href="/contacto">
          Contacto
        </a>
      </Menu>
      <div className="hero">
        <HorizontalMenu />
        <SearchBar />
      </div>
    </>
  );
};

export default Header;
