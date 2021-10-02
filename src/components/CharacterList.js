import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  console.log("Character List", props);
  const html = props.data.map((characterData) => {
    return (
      <li className="cardList" key={props.data.id}>
        <CharacterCard characterData={characterData} />
      </li>
    );
  });
  return <ul>{html}</ul>;
}
export default CharacterList;
