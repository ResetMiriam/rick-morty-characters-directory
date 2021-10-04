import CharacterNotFound from "./CharacterNotFound";

import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  if (props.data.length === 0) {
    return <CharacterNotFound searchName={props.searchName} />;
  }
  const html = props.data.map((characterData) => (
    <li className="cardList" key={characterData.id}>
      <CharacterCard
        id={characterData.id}
        image={characterData.image}
        name={characterData.name}
        species={characterData.species}
        status={characterData.status}
      />
    </li>
  ));

  return <ul className="cardList__complete">{html}</ul>;
}
export default CharacterList;
