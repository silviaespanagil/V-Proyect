const SearchBar = () => {
  return (
    <>
      <section className="search">
        <h3 className="search__text">Tu pones el hambre, nosotros el sitio</h3>
        <form>
          <label for="searchBox">
            <input
              type="text"
              id="searchBox"
              className="search__box"
              placeholder="¿Qué o donde quieres comer?"
            />
          </label>
          <button className="search__button">Buscar</button>
        </form>
      </section>
    </>
  );
};

export default SearchBar;
