//stylesheets
import "../styles/App.scss";

//components
import Header from "./Header";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

import api from "../services/CharacterApi";
import { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";

function App() {
  // STATES
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchSpecies, setSearchSpecies] = useState("all");

  //USEFFECT
  useEffect(() => {
    api().then((initialData) => {
      const orderCharacter = initialData.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );
      setData(orderCharacter);
    });
  }, []);

  //HANDLE
  const handleSearchName = (ev) => {
    setSearchName(ev.currentTarget.value);
  };

  const handleSearchSpecies = (ev) => {
    setSearchSpecies(ev.target.value);
  };

  const routeData = useRouteMatch("/character/:id");
  const characterId = routeData !== null ? routeData.params.id : "";

  const selectedCharacter = data.find(
    (character) => character.id === parseInt(characterId)
  );

  const filteredData = data
    .filter((character) =>
      character.name
        .toLocaleLowerCase()
        .includes(searchName.toLocaleLowerCase())
    )
    .filter(
      (character) =>
        searchSpecies === "all" || character.species === searchSpecies
    );

  return (
    <div>
      <Header />
      <main className="main__section">
        <section>
          <Filters
            searchName={searchName}
            handleSearchName={handleSearchName}
            searchSpecies={searchSpecies}
            handleSearchSpecies={handleSearchSpecies}
          />
        </section>
        <section className="data_container">
          <CharacterList data={filteredData} searchName={searchName} />
        </section>
      </main>
      <Switch>
        <Route path="/character/:id">
          <section>
            <CharacterDetail character={selectedCharacter} />
          </section>
        </Route>
        <Route exact path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
