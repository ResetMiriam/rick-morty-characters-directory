import { Link } from "react-router-dom";

function CharacterCard(props) {
  return (
    <Link
      to={`./character/${props.characterData.id}`}
      style={{ textDecoration: "none" }}
    >
      <img
        className="card__image"
        src={props.characterData.image}
        alt={props.characterData.name}
        title={props.characterData.name}
      />
      <div className="card__text--container">
        <h4 className="card__text card__name">{props.characterData.name}</h4>
        <p className=" card__text card__specie">
          {props.characterData.species}
        </p>
      </div>
    </Link>
  );
}
export default CharacterCard;
