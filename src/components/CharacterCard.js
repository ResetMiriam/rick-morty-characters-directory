function CharacterCard(props) {
  return (
    <>
      <img
        className="cardImage"
        src={props.characterData.image}
        alt={`Foto de ${props.characterData.name}`}
        title={`Foto de ${props.characterData.name}`}
      />
      <h4>{props.characterData.name}</h4>
      <p>{props.characterData.species}</p>
    </>
  );
}
export default CharacterCard;
