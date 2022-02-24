import "./Header.css";
import Button from "../../components/button/Button";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-body">
        <div className="header-title ">
          <h1 className=" circularstd-book-normal-black-64px">
            Cheap & Instant Cross Border Payments for Africa.
          </h1>
        </div>
        <div className="header-text">
          <p className="circularstd-book-normal-black-18px-bold">
            Open a free account in minutes and Make the most of your Cash today.
          </p>
        </div>
        <div className="header-image"></div>
        <div className="header-button">
          <Button text={"Get Started"} bgColor={"#30ae4d"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
