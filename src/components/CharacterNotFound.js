function CharacterNotFound(props) {
  return (
    <section className="notFound__section">
      <p className="notFound__text">{`Who is ${props.searchName}? Try your search again.`}</p>
    </section>
  );
}

export default CharacterNotFound;
