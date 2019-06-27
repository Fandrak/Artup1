import logo from "../images/artup-logo.jpg";

const Footer = () => (
  <section id="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4 footer-box">
          <img src={logo} />
          <p>
            <span>
              >"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </span>
          </p>
        </div>
        <div className="col-md-4 footer-box">
          <p>
            <b>CONTAT US</b>
          </p>
          <p>
            <i className="fa fa-map-marker" />
            Prague 13, Czechia
          </p>
          <p>
            <i className="fa fa-phone" />
            +420 603805518
          </p>
          <p>
            <i className="fa fa-envelope-o" />
            artup@artup.cz
          </p>
        </div>
        <div className="col-md-4 footer-box">
          <p>
            <b>SUBSCRIBE NEWSLETTER</b>
          </p>
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
          />
          <button type="button" className="btn btn-primary">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
