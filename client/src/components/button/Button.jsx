import "./Button.css";

const Button = ({ bgColor, text, border }) => {
  return (
    <div
      style={{ backgroundColor: bgColor, border: border }}
      className="button"
    >
      <a className="circularstd-medium-white-24px" href="./login">
        {text}
      </a>
    </div>
  );
};

export default Button;
