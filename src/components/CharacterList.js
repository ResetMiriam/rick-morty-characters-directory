import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const html = props.data.map((characterData) => (
    <li className="cardList" key={characterData.id}>
      <CharacterCard characterData={characterData} />
    </li>
  ));

  return <ul className="cardList__complete">{html}</ul>;
}
export default CharacterList;
