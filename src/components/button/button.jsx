import "./button.css";

function Button({ type, text, onClick }) {
  return (
    <button onClick={onClick} className={`btn ${type}`}>
      {text}
    </button>
  );
}

export default Button;
