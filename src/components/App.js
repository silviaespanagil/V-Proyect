//dependencies
import { Route, Switch } from "react-router-dom";
//components
import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import Main from "./Main";
import AboutUs from "./AboutUs";
import FavPlaces from "./FavPlaces";
import FormAddPlace from "./FormAddPlace";
//stylsheets
import "../stylesheets/App.scss";

function App() {
  return (
    <>
      <Header />
      {/*<SearchBar /> Podría ser parte del Main?*/}
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
        <Route path="/sugerencias">
          <FormAddPlace />
        </Route>
      </Switch>
      <Footer />
    </>

    /*<div className="App">
      <div className="progress"></div>
    </div>*/
  );
}
export default App;
