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
        <div className=" card__text card__icons">
          <IconSpecie specie={props.species} />
          <IconStatus status={props.status} />
        </div>
      </div>
    </Link>
  );
}
export default CharacterCard;
