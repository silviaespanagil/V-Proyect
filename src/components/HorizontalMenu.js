import noLogo from "../images/giphypig.gif";

const HorizontalMenu = () => {
  return (
    <div className="hMenu">
      <img className="hMenu__img" src={noLogo} alt="logo" />
      <ul className="hMenu__ul">
        <li className="hMenu__item">Sobre nosotras</li>
        <li className="hMenu__item">Mis favoritos</li>
        <li className="hMenu__item">Agregar un sitio</li>
      </ul>
    </div>
  );
};
export default HorizontalMenu;
