import { Link } from "react-router-dom";
import "../styles/layout/Modal.scss";

function CharacterDetail(props) {
  if (props.character === undefined) {
    return (
      <section>
        <p>This character doesn't exist</p>
      </section>
    );
  } else {
    return (
      <div className="modal">
        <div className="modal__dialog">
          <div className="modal__content">
            <header className="modal__header">
              <h2 className="modal__title">{props.title}</h2>
              <Link to="/">
                <span className="modal__close icon fas fa-times"></span>
              </Link>
            </header>
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
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterDetail;
