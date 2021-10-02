function filterByName(props) {
  return (
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Search your favorite character"
      value={props.searchName}
      onChange={props.handleSearchName}
    />
  );
}

export default filterByName;
