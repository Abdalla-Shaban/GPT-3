import "./footer.css";
import logo from "../../assets/GPT-3.svg";
function Footer() {
  return (
    <>
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-content section__margin">
        <div className="gpt3__footer-content-intro">
          <h1 className="gradient__text">
            Do you want to step in to the <br />
            future before others
          </h1>
          <button type="button">Request Early Access</button>
        </div>
        <div className="gpt3__footer-content-container">
          <div className="gpt3__footer-content-logo">
            <img src={logo} alt="GPT-3" />
            <p>
              Crechterwoord K12 182 DK <br />
              Alknjkcb, All Rights Reserved
            </p>
          </div>
          <div className="gpt3__footer-content-links">
            <h3>Links</h3>
            <ul>
              <li>Overons</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="gpt3__footer-content-compony">
            <h3>Compony</h3>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="gpt3__footer-content-info">
            <h3>Get in touch</h3>
            <ul>
              <li>Crechterwoord K12 182 DK Alknjkcb</li>
              <li>085-132567</li>
              <li>info@payme.net</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      <div className="gpt3__footer-copyright">© 2021 GPT-3. All rights reserved.</div>
    </>
  );
}

export default Footer;
