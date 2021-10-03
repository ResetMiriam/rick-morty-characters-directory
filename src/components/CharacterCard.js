import "../styles/layout/CharacterCard.scss";

function CharacterCard(props) {
  return (
    <>
      <img
        className="cardImage"
        src={props.characterData.image}
        alt={props.characterData.name}
        title={props.characterData.name}
      />
      <h4>{props.characterData.name}</h4>
      <p>{props.characterData.species}</p>
    </>
  );
}
export default CharacterCard;
