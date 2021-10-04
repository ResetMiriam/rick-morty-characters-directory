import Modal from "./Modal";

function CharacterDetail(props) {
  if (props.character === undefined) {
    return (
      <Modal title="Upps!">
        <p>This character doesn't exist.</p>
      </Modal>
    );
  } else {
    return (
      <Modal title={props.character.name}>
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
        </main>{" "}
      </Modal>
    );
  }
}

export default CharacterDetail;
