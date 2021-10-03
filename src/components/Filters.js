import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";
import "../styles/layout/Filters.scss";

function filters(props) {
  return (
    <form className="form">
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
