import baseImage from "../images/foodImgExample.jpg";

const DataCard = (props) => {
  return (
    <>
      <article className="cards">
        <div className="cards__type">
          <i className="fas fa-leaf fa-lg cards__type--icon" title="Vegano"></i>
          <i
            class="fas fa-dog fa-lg cards__type--icon"
            title="Animales bienvenidos"
          ></i>
        </div>
        <img className="cards__img" src={baseImage} alt="Restaurant foto" />
        <div className="cards__info">
          <h2 className="cards__info--items">Deliveggie</h2>
          <p className="cards__info--items">
            Rúa Prego de Oliver, 10, 32002 Ourense
          </p>
          <a
            className="cards__info--items cards__info--items-link"
            href="https://www.instagram.com/deliveggieourense/"
          >
            Página web
          </a>
        </div>
      </article>
      <article className="cards">
        <div className="cards__type">
          <i className="fas fa-leaf fa-lg cards__type--icon" title="Vegano"></i>
          <i
            class="far fa-times-circle fa-lg cards__type--icon"
            title="No acepta animales"
          ></i>
        </div>
        <img className="cards__img" src={baseImage} alt="Restaurant foto" />
        <div className="cards__info">
          <h2 className="cards__info--items">Distrito Vegano</h2>
          <p className="cards__info--items">
            Calle del Dr. Fourquet, 32, 28012 Madrid
          </p>
          <a
            className="cards__info--items cards__info--items-link"
            href="https://distritovegano.com/"
          >
            Página web
          </a>
        </div>
      </article>
      <article className="cards">
        <div className="cards__type">
          <i
            className="fas fa-seedling fa-lg cards__type--icon"
            title="Vegetariano"
          ></i>
          <i
            class="fas fa-dog fa-lg cards__type--icon"
            title="Animales bienvenidos"
          ></i>
        </div>
        <img className="cards__img" src={baseImage} alt="Restaurant foto" />
        <div className="cards__info">
          <h2 className="cards__info--items">Serendipia</h2>
          <p className="cards__info--items">
            Calle Dr. Castroviejo, 9, 18012 Granada
          </p>
          <a
            className="cards__info--items cards__info--items-link"
            href="https://serendipiagranada.wordpress.com/"
          >
            Página web
          </a>
        </div>
      </article>
      <article className="cards">
        <div className="cards__type">
          <i className="fas fa-leaf fa-lg cards__type--icon" title="Vegano"></i>
          <i
            class="fas fa-dog fa-lg cards__type--icon"
            title="Animales bienvenidos"
          ></i>
        </div>
        <img className="cards__img" src={baseImage} alt="Restaurant foto" />
        <div className="cards__info">
          <h2 className="cards__info--items">Deliveggie</h2>
          <p className="cards__info--items">
            Rúa Prego de Oliver, 10, 32002 Ourense
          </p>
          <a
            className="cards__info--items cards__info--items-link"
            href="https://www.instagram.com/deliveggieourense/"
          >
            Página web
          </a>
        </div>
      </article>
      <article className="cards">
        <div className="cards__type">
          <i className="fas fa-leaf fa-lg cards__type--icon" title="Vegano"></i>
          <i
            class="far fa-times-circle fa-lg cards__type--icon"
            title="No acepta animales"
          ></i>
        </div>
        <img className="cards__img" src={baseImage} alt="Restaurant foto" />
        <div className="cards__info">
          <h2 className="cards__info--items">Distrito Vegano</h2>
          <p className="cards__info--items">
            Calle del Dr. Fourquet, 32, 28012 Madrid
          </p>
          <a
            className="cards__info--items cards__info--items-link"
            href="https://distritovegano.com/"
          >
            Página web
          </a>
        </div>
      </article>
      <article className="cards">
        <div className="cards__type">
          <i
            className="fas fa-seedling fa-lg cards__type--icon"
            title="Vegetariano"
          ></i>
          <i
            class="fas fa-dog fa-lg cards__type--icon"
            title="Animales bienvenidos"
          ></i>
        </div>
        <img className="cards__img" src={baseImage} alt="Restaurant foto" />
        <div className="cards__info">
          <h2 className="cards__info--items">Serendipia</h2>
          <p className="cards__info--items">
            Calle Dr. Castroviejo, 9, 18012 Granada
          </p>
          <a
            className="cards__info--items cards__info--items-link"
            href="https://serendipiagranada.wordpress.com/"
          >
            Página web
          </a>
        </div>
      </article>
      <article className="cards">
        <div className="cards__type">
          <i className="fas fa-leaf fa-lg cards__type--icon" title="Vegano"></i>
          <i
            class="fas fa-dog fa-lg cards__type--icon"
            title="Animales bienvenidos"
          ></i>
        </div>
        <img className="cards__img" src={baseImage} alt="Restaurant foto" />
        <div className="cards__info">
          <h2 className="cards__info--items">Deliveggie</h2>
          <p className="cards__info--items">
            Rúa Prego de Oliver, 10, 32002 Ourense
          </p>
          <a
            className="cards__info--items cards__info--items-link"
            href="https://www.instagram.com/deliveggieourense/"
          >
            Página web
          </a>
        </div>
      </article>
      <article className="cards">
        <div className="cards__type">
          <i className="fas fa-leaf fa-lg cards__type--icon" title="Vegano"></i>
          <i
            class="far fa-times-circle fa-lg cards__type--icon"
            title="No acepta animales"
          ></i>
        </div>
        <img className="cards__img" src={baseImage} alt="Restaurant foto" />
        <div className="cards__info">
          <h2 className="cards__info--items">Distrito Vegano</h2>
          <p className="cards__info--items">
            Calle del Dr. Fourquet, 32, 28012 Madrid
          </p>
          <a
            className="cards__info--items cards__info--items-link"
            href="https://distritovegano.com/"
          >
            Página web
          </a>
        </div>
      </article>
    </>
  );
};

export default DataCard;
