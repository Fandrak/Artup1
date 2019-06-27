import about from "../images/about-us.jpg";

const About = () => (
  <section id="about-us">
    <div className="container">
      <h1 className="title text-center">WHY CHOOSE US</h1>
      <div className="row">
        <div className="col-md-6 about us">
          <p className="about-title">Why we're different</p>
          <ul>
            <li>Believes in doing business with honesty</li>
            <li>Believes in doing business with honesty</li>
            <li>Believes in doing business with honesty</li>
            <li>Believes in doing business with honesty</li>
            <li>Believes in doing business with honesty</li>
            <li>Believes in doing business with honesty</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img src={about} className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
);
export default About;
