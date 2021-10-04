import { Link } from "react-router-dom";

function CharacterCard(props) {
  return (
    <Link
      to={`./character/${props.characterData.id}`}
      style={{ textDecoration: "none" }}
    >
      <section className="card">
        <img
          className="card__image"
          src={props.characterData.image}
          alt={props.characterData.name}
          title={props.characterData.name}
        />
        <h4 className="card__text card__name">{props.characterData.name}</h4>
        <p className=" card__text card__specie">
          {props.characterData.species}
        </p>
      </section>
    </Link>
  );
}
export default CharacterCard;
