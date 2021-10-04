function IconStatus(props) {
  const alive = <i className="fas fa-heartbeat"></i>;
  const dead = <i className="fas fa-skull-crossbones"></i>;
  const other = <i class="fas fa-question-circle"></i>;

  const whatStatus = (status) => {
    if (status === "Alive") {
      return alive;
    } else if (status === "Dead") {
      return dead;
    } else {
      return other;
    }
  };
  return whatStatus(props.status);
}

export default IconStatus;
