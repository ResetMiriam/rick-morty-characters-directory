import CharacterItem from "./CharacterItem";

function CharacterList(props) {
  console.log("Character List", props);
  const html = props.data.map((characterData, index) => {
    return (
      <li className="cardList">
        <CharacterItem characterData={characterData} />
      </li>
    );
  });
  return <ul>{html}</ul>;
}
export default CharacterList;
