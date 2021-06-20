//COMPONENTES
import DataCard from "./DataCard.js";

const DataList = () => {
  return (
    <>
      <h2 className="listResults">Tus resultados</h2>
      <div className="cardList">
        <DataCard />
      </div>
    </>
  );
};

export default DataList;
