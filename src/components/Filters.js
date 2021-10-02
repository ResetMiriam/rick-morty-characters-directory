import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";

function filters(props) {
  return (
    <form>
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
