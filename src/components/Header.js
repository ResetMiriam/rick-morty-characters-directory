import background from "../images/Rick_and_Morty_Logo.png";

function header(props) {
  return (
    <header className="header__section">
      <a
        title="Rick and Morty Directory"
        href="http://beta.adalab.es/modulo-3-evaluacion-final-MiriamVF/#/"
      >
        {" "}
        <img className="header__title" src={background} alt="Rick and Morty" />
      </a>
    </header>
  );
}

export default header;
