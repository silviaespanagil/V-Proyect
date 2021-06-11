import { Link } from "react-router-dom";
import noLogo from "../images/giphypig.gif";

const HorizontalMenu = () => {
  return (
    <header className="hMenu">
      <Link to="/">
        <img className="hMenu__img" src={noLogo} alt="logo" />
      </Link>
      <ul className="hMenu__ul">
        <Link to="/nosotras">
          <li className="hMenu__item">Sobre nosotras</li>
        </Link>
        <Link to="/favoritos">
          <li className="hMenu__item">Mis favoritos</li>
        </Link>
        <Link to="/recomendacion">
          <li className="hMenu__item">Agregar un sitio</li>
        </Link>
      </ul>
    </header>
  );
};
export default HorizontalMenu;
