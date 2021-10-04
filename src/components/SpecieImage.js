function specieImage(props) {
  const human = <i class="fas fa-user-alt"></i>;
  const alien = <i class="fas fa-rocket"></i>;

  const whatSpecie = (specie) => {
    if (specie === "Human") {
      return human;
    } else if (specie === "Alien") {
      return alien;
    }
  };
  return whatSpecie(props.specie);
}

export default specieImage;
