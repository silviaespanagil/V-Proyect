import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <h3 className="footer__suggest">¿Tienes alguna sugerencia?</h3>
        <p className="footer__text">
          Envianos un email y nos pondremos en contacto contigo
        </p>
        <form className="footer__form" action="" method="POST">
          <input className="footer__input" type="text" placeholder="E-mail" />
          <button className="footer__button">
            <i className="footer__button--arrow fas fa-arrow-right"></i>
          </button>
        </form>
        <nav>
          <ul className="footer__ul">
            <li className="footer__ul--li">
              <Link to="/">Home</Link>
            </li>
            <li className="footer__ul--li">
              <Link to="/aboutus">About us</Link>
            </li>
            <li className="footer__ul--li">
              <Link to="/recomendacion">Recomendaciones</Link>
            </li>
            <li className="footer__ul--li">
              <Link to="/favoritos">Favoritos</Link>
            </li>
            <li className="footer__ul--li">
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
        <small className="footer__copy">&copy; 2021 Sil&Nur</small>
      </div>
    </footer>
  );
};
export default Footer;
