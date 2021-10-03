//stylesheets
import "../styles/core/Reset.scss";
//components
import CharacterList from "./CharacterList";
import Header from "./Header";
import Filters from "./Filters";

import api from "../services/CharacterApi";
import { useEffect, useState } from "react";

function App() {
  // STATES
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchSpecies, setSearchSpecies] = useState("all");

  //USEFFECT
  useEffect(() => {
    api().then((initialData) => {
      setData(initialData);
    });
  }, []);

  //HANDLE
  const handleSearchName = (ev) => {
    setSearchName(ev.currentTarget.value);
  };

  const handleSearchSpecies = (ev) => {
    setSearchSpecies(ev.target.value);
  };

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
        <Filters
          searchName={searchName}
          handleSearchName={handleSearchName}
          searchSpecies={searchSpecies}
          handleSearchSpecies={handleSearchSpecies}
        />
        <CharacterList data={filteredData} />
      </main>
    </div>
  );
}

export default App;
