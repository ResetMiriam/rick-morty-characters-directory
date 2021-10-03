function filterBySpecie(props) {
  return (
    <>
      <select
        className="filter filter__specie"
        name="species"
        id="species"
        value={props.searchSpecies}
        onChange={props.handleSearchSpecies}
      >
        <option value="all">Species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
}

export default filterBySpecie;
