function footer() {
  return (
    <footer className="footer">
      <p>
        Made with <i className="fab fa-react"></i> and{" "}
        <i className="fas fa-coffee"></i>{" "}
      </p>{" "}
      <div className="footer__copy">
        {" "}
        &copy; 2021 ResetMiriam{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="Miriam Verdú Francés"
          href="https://www.linkedin.com/in/miriam-verdu-frances/"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="ResetMiriam"
          href="https://twitter.com/ResetMiriam"
        >
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
}

export default footer;
