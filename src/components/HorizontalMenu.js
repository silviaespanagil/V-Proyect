import { Link } from "react-router-dom";
import noLogo from "../images/giphypig.gif";

const HorizontalMenu = () => {
  return (
    <header className="hMenu">
      <Link to="/">
        <img className="hMenu__img" src={noLogo} alt="logo" />
      </Link>

      <ul className="hMenu__ul">
        <Link to="/">
          <li className="hMenu__item">Home</li>
        </Link>
        <Link to="/favoritos">
          <li className="hMenu__item">Favoritos</li>
        </Link>
        <Link to="/nosotras">
          <li className="hMenu__item">About us</li>
        </Link>
        <Link to="/sugerencias">
          <li className="hMenu__item">Sugerencias</li>
        </Link>
        <Link to="/contacto">
          <li className="hMenu__item">Contacto</li>
        </Link>
      </ul>
    </header>
  );
};
export default HorizontalMenu;
