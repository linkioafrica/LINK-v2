import "./Community.css";
import Button from "../../components/button/Button";
import Flag from "../../components/flag/Flag";

const Community = () => {
  return (
    <div className="community-container">
      <div className="top-sec ezra">
        <p className="circularstd-regular-normal-48px ">
          A Multi Currency Account
        </p>
        <p className="circularstd-book-normal-black-18px-bold">
          You can now create a Global Foreign Account with your Local currency
          at our Low Exchange Rate
        </p>
      </div>
      <Flag />
      <div className="bottom-sec ezra">
        <p className="circularstd-medium-navy-blue-20px ">
          Get access to the Most Global Cash Transfer sevice for Africa
        </p>
        <p className="circularstd-medium-black-48px ">
          Join our Community Worldwide.
        </p>
        <Button text={"Get Started"} bgColor={"#30ae4d"} />
      </div>
    </div>
  );
};

export default Community;
