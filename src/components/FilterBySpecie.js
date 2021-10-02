function filterBySpecie(props) {
  return (
    <>
      <label htmlFor="species"></label>
      <select
        name="species"
        id="species"
        value={props.searchSpecies}
        onChange={props.handleSearchSpecies}
      >
        <option value="all">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
}

export default filterBySpecie;
