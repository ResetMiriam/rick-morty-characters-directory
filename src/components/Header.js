import background from "../images/Rick_and_Morty_Logo.png";
import "../styles/layout/Header.scss";

function header(props) {
  return (
    <header className="header__section">
      <img className="header__title" src={background} alt="Rick and Morty" />
    </header>
  );
}

export default header;
