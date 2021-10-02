import "../styles/CardList.scss";
import "../styles/CardItem.scss";
import api from "../services/CharacterApi";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";

function App() {
  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    api.getCharactersFromApi().then((initialData) => {
      setData(initialData);
    });
  }, []);

  const handleSearchName = (ev) => {
    setSearchName(ev.currentTarget.value);
  };

  const filteredData = data.filter((character) =>
    character.name.toLocaleLowerCase().includes(searchName)
  );

  return (
    <div>
      <h1>Rick and Morty</h1>
      <form>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Busca a tu personaje favorito"
          value={searchName}
          onChange={handleSearchName}
        />
      </form>
      <CharacterList data={filteredData} />
    </div>
  );
}

export default App;
