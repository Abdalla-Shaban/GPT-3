import feature from "../../assets/Feature.png";
import "./feature.css";
function Feature() {
  return (
    <div className="gpt3__feature section__padding section__margin">
        <span className="mask"></span>
      <div className="gpt3__feature-image">
        <img src={feature} alt="feature" />
      </div>
      <div className="gpt3__feature-content">
        <p>Request Early Access to Get Started</p>
        <h3 className="gradient__text">
          The possibilities are <br /> beyond your imagination
        </h3>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p>Request Early Access to Get Started</p>
      </div>
    </div>
  );
}

export default Feature;
