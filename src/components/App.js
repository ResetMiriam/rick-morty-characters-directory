import "../styles/Card.scss";

function App() {
  return (
    <div>
      <h1>Rick and Morty</h1>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Busca a tu personaje favorito"
      />
      <ul>
        <li className="card">
          <img src="" alt={`Foto de nombre`} title={`Foto de nombre`} />
          <h4>Nombre del personaje</h4>
          <p>Especie</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
