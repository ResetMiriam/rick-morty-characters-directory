import notFoundImg from "../images/RyM_notFound.png";

function CharacterNotFound(props) {
  return (
    <section className="notFound__section">
      <img
        className="notFound__img"
        src={notFoundImg}
        alt="Character not found"
      />

      <p className="notFound__text">{`¿Who is ${props.searchName}?`}</p>
    </section>
  );
}

export default CharacterNotFound;
