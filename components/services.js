import services1 from "../images/services1.png";
import services2 from "../images/services2.png";
import services3 from "../images/services3.jpg";

const Services = () => (
  <section id="services">
    <div className="container text-center">
      <h1 className="title">WHAT WE DO?</h1>
      <div className="row text-center">
        <div className="col-md-4 services">
          <img src={services1} className="service-img" />
          <h4>Growth Marketing</h4>
          <p>
            <span>
              >"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </span>
          </p>
        </div>
        <div className="col-md-4 services">
          <img src={services2} className="service-img" />
          <h4>Sales</h4>
          <p>
            <span>
              >"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </span>
          </p>
        </div>
        <div className="col-md-4 services">
          <img src={services3} className="service-img" />
          <h4>Online Branding</h4>
          <p>
            <span>
              >"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </span>
          </p>
        </div>
      </div>
      <button type="button" className="btn btn-primary">
        All Services
      </button>
    </div>
  </section>
);
export default Services;
