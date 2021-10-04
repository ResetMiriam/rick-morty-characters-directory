function footer() {
  return (
    <footer className="footer">
      <p>
        Made with <i className="fab fa-react"></i> and{" "}
        <i className="fas fa-coffee"></i>{" "}
      </p>{" "}
      <div className="footer__copy">
        {" "}
        &copy; 2021 Miriamy.{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="Rick and Morty Directory"
          href="https://www.linkedin.com/in/miriam-verd%C3%BA-franc%C3%A9s/"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}

export default footer;
