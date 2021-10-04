import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";

function filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <FilterByName
        searchName={props.searchName}
        handleSearchName={props.handleSearchName}
      />
      <FilterBySpecie
        searchSpecies={props.searchSpecies}
        handleSearchSpecies={props.handleSearchSpecies}
      />
    </form>
  );
}

export default filters;
