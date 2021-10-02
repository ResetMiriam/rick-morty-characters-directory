import "../styles/CardList.scss";
import "../styles/CardItem.scss";
import api from "../services/CharacterApi";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.getCharactersFromApi().then((initialData) => {
      console.log(initialData);
      setData(initialData);
    });
  }, []);

  return (
    <div>
      <h1>Rick and Morty</h1>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Busca a tu personaje favorito"
      />
      <CharacterList data={data} />
    </div>
  );
}

export default App;
