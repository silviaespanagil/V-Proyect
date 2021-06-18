import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <small className="footer__copy">&copy; 2021 Sil&Nur</small>
      <nav>
        <ul className="footer__ul">
          <li className="footer__ul--li">
            <Link to="/aboutus">About us</Link>
          </li>
          <li className="footer__ul--li">
            <Link to="/recomendacion">Agregar un sitio</Link>
          </li>
          <li className="footer__ul--li">
            <Link to="/favoritos">Favoritos</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
export default Footer;
