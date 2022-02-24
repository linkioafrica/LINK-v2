import "./ConvertHome.css";
import Button from "../../components/button/Button";

const convertHome = () => {
  return (
    <div className="convert-container">
      <div className="convert-para">
        <p className="circularstd-regular-normal-64px">
          Built with Global in Mind
        </p>
      </div>
      <div className="global-div  send-container">
        <div className="rate-div send-money">
          <p className="without-border circularstd-regular-normal-white-64px">
            Send money without borders
          </p>
          <p className="thousands circularstd-regular-normal-white-24px-3">
            Join thousands who save on High fees when sending monet abroad with
            LINK
          </p>
          <div className="send-btn">
            <Button text={"Get Started"} bgColor={"#30ae4d"} />
            <Button
              text={"Compare rates"}
              bgColor={"none"}
              border={"1px solid white"}
            />
          </div>
        </div>
        <div className="rate-div converter"></div>
      </div>
      <div className="global-div  premium-container">
        <p className="circularstd-regular-normal-white-24px-3  premium-para">
          Spend like a Local around the world without limits with the LINK
          Global Debit Card
        </p>
      </div>
    </div>
  );
};

export default convertHome;
