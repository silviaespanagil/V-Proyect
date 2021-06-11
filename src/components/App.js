//dependencies
import { Route, Switch } from "react-router-dom";
//components
import Header from "./Header.js";
import Main from "./Main.js";
import AboutUs from "./AboutUs.js";
import FavPlaces from "./FavPlaces.js";
import FormAddPlace from "./FormAddPlace.js";
//stylsheets
import "../stylesheets/App.scss";

function App() {
  return (
    <>
      <Switch>
        {/*HOME*/}
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/nosotras">
          <AboutUs />
        </Route>
        <Route path="/favoritos">
          <FavPlaces />
        </Route>
        <Route path="/recomendacion">
          <FormAddPlace />
        </Route>
      </Switch>
    </>
    /*<div className="App">
      <div className="progress"></div>
    </div>*/
  );
}
export default App;
