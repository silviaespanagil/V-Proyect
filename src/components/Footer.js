import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <small>&copy; 2021 Sil&Nur</small>
      <nav>
        <ul>
          <li>
            <Link to="/aboutus">About us</Link>
          </li>
          <li>
            <Link to="/recomendacion">Agregar un sitio</Link>
          </li>
          <li>
            <Link to="/favoritos">Favoritos</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
export default Footer;
