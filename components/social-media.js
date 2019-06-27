import facebook from "../images/facebook.jpg";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";

const Social_media = () => (
  <section id="social-media">
    <div className="container text-center">
      <p>FIND US ON SOCIAL MEDIA</p>
      <div className="social-icons">
        <a href="#">
          <img src={facebook} />
        </a>
        <a href="#">
          <img src={linkedin} />
        </a>
        <a>
          <img src={twitter} />
        </a>
      </div>
    </div>
  </section>
);

export default Social_media;
