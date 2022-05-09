import "./Footer.css";
// import footerLogo from "../../assets/link-logo-white.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section">
        <div className="footer-top">
          <div className="footer-map"></div>
          <div className="footers footer-nav circularstd-book-normal-white-14px">
            <p>
              <a href="./">Home</a>
            </p>
            <p>
              <a href="./">Order</a>
            </p>
            <p>
              <a href="./">Track Transfer</a>
            </p>
            <p>
              <a href="./">FAQ</a>
            </p>
            <p>
              <a href="./">Contact</a>
            </p>
            <p>
              <a href="./">Private Policy</a>
            </p>
          </div>
          <div className=" footers footer-support">
            <div className="footer-social">
              <div className="foot-tag"></div>
              <div className="foot-tag"></div>
              <div className="foot-tag"></div>
              <div className="foot-tag"></div>
            </div>
            <p>
              <a className="circularstd-book-normal-white-18px" href="./">
                support@linkupio.com
              </a>
            </p>
          </div>
        </div>
        <div className=" footer-bottom">
          <div className="footer-logo"></div>
          <p className="foot-para circularstd-book-normal-white-14px ">
            2021 LINK.IO Ltd. All Rights Reserved. <br />
          </p>
          <p className="foot-para circularstd-book-normal-white-14px ">
            © LINK.IO Ltd is a company registered in England and Wales with the
            registered company number 13581834 and its registered address at 2
            Fredrick Street, Kings Cross, London, United Kingdom, WC1X 0ND as a
            Financial intermediation not elsewhere classified Company. <br />
          </p>
          <p className="foot-para circularstd-book-normal-white-14px ">
            LINKIO.Global Services Ltd. with company number 1820023 and LINK.IO
            Ltd Nigeria with company number 1820652 are duly registered with the
            Corporate Affairs Commission Nigeria with the company registered
            Address at Plot B30, Federal Housing Estate,Idoro, Akwa-Ibom,
            Nigeria. <br />
          </p>
          <p className="foot-para circularstd-book-normal-white-14px ">
            LINK is a Financial Technology company. LINK offers its products and
            services in partnership with licensed transmitters in their
            respective jurisdictions. <br />
          </p>
          <p className="foot-para circularstd-book-normal-white-14px ">
            Digital assets are subject to a number of risks, including price
            volatility. Transacting in digital assets could result in
            significant losses and may not be suitable for some consumers.
            Digital asset markets and exchanges are not regulated with the same
            controls or customer protections available with other forms of
            financial products and are subject to an evolving regulatory
            environment. Digital assets do not typically have legal tender
            status and are not covered by deposit protection insurance. The past
            performance of a digital asset is not a guide to future performance,
            nor is it a reliable indicator of future results or performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
