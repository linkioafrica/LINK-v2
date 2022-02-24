import "./Button.css";

const Button = ({ text }) => {
  return (
    <div className="button">
      <a className="circularstd-medium-white-24px" href="./login">
        {text}
      </a>
    </div>
  );
};

export default Button;
