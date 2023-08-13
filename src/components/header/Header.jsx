import "./header.css";
import img1 from "../../assets/Ellipse 31.svg";
import img2 from "../../assets/Ellipse 32.svg";
import img3 from "../../assets/Ellipse 33.svg";
import img4 from "../../assets/Ellipse 34.svg";
import img5 from "../../assets/Ellipse 35.svg";
import img6 from "../../assets/Ellipse 36.svg";
import ai from "../../assets/ai.png";
function Header() {
  return (
    <div className="gpt3__header section__padding">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-pepole">
          <div className="gpt3__header-people__images">
            <img src={img1} alt="Ellipse 31" />
            <img src={img2} alt="Ellipse 32" />
            <img src={img3} alt="Ellipse 33" />
            <img src={img4} alt="Ellipse 34" />
            <img src={img5} alt="Ellipse 35" />
            <img src={img6} alt="Ellipse 36" />
            <span className="nums">1.6k+</span>
          </div>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-ai">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
