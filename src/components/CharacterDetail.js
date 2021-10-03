function CharacterDetail(props) {
  return (
    <main className="main__section">
      <img
        className="detailCardImage"
        src={props.character.image}
        alt={props.character.name}
        title={props.character.name}
      />
      <h4>{props.character.name}</h4>
      <p>Status: {props.character.status}</p>
      <p>Species: {props.character.species}</p>
      <p>Origin: {props.character.planet}</p>
      <p>Episodes: {props.character.episodes}</p>
    </main>
  );
}

export default CharacterDetail;
