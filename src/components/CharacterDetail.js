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
        <img
          className="detail__cardImage"
          src={props.character.image}
          alt={props.character.name}
          title={props.character.name}
        />
        <h4 className="detail__name">{props.character.name}</h4>
        <p className="detail__text">Status: {props.character.status}</p>
        <p className="detail__text">Species: {props.character.species}</p>
        <p className="detail__text">Origin: {props.character.planet}</p>
        <p className="detail__text">Episodes: {props.character.episodes}</p>
      </Modal>
    );
  }
}

export default CharacterDetail;
