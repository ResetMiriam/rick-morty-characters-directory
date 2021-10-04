function IconSpecie(props) {
  const human = <i className="fas fa-user-alt"></i>;
  const alien = <i className="fas fa-rocket"></i>;

  const whatSpecie = (specie) => {
    if (specie === "Human") {
      return human;
    } else if (specie === "Alien") {
      return alien;
    }
  };
  return whatSpecie(props.specie);
}

export default IconSpecie;
