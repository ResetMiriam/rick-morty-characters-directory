import "../styles/CardList.scss";
import "../styles/CardItem.scss";
import api from "../services/CharacterApi";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

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
      <h1>Rick and Morty</h1>
      <Filters
        searchName={searchName}
        handleSearchName={handleSearchName}
        searchSpecies={searchSpecies}
        handleSearchSpecies={handleSearchSpecies}
      />
      <CharacterList data={filteredData} />
    </div>
  );
}

export default App;
