function CharacterItem(props) {
  return (
    <>
      <img
        className="cardImage"
        src="https://raw.githubusercontent.com/Adalab/rick-y-morty/master/assets/img/1.jpeg"
        alt={`Foto de nombre`}
        title={`Foto de nombre`}
      />
      <h4>Nombre del personaje</h4>
      <p>Especie</p>
    </>
  );
}
export default CharacterItem;
