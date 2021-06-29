//COMPONENTES
import DataCard from "./DataCard.js";

const DataListReco = () => {
  return (
    <>
      <h2 className="home__recomendationTitle">
        Restaurantes recomendados para ti
      </h2>
      <div className="cardList">
        <DataCard />
      </div>
    </>
  );
};

export default DataListReco;
