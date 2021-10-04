import { Link } from "react-router-dom";
import IconSpecie from "./IconSpecie";
import IconStatus from "./IconStatus";

function CharacterCard(props) {
  return (
    <Link to={`./character/${props.id}`} style={{ textDecoration: "none" }}>
      <img
        className="card__image"
        src={props.image}
        alt={props.name}
        title={props.name}
      />
      <div className="card__text--container">
        <h4 className="card__text card__name">{props.name}</h4>
        <p className=" card__text card__specie">
          <IconSpecie specie={props.species} />
          <IconStatus status={props.status} />
        </p>
      </div>
    </Link>
  );
}
export default CharacterCard;
