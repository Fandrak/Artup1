import Link from "next/link";
import MyDocument from "next/document";

import Banner from "../components/banner";
import Navbar from "../components/navbar";

import facebook from "../images/facebook.jpg";
import linkedin from "../images/linkedin.png";

import "../styles.scss";

const Index = () => (
  <>
    <Navbar user="abc" />
    <Banner />

    <section id="services">
      <div className="container text-center">
        <h1 className="title">WHAT WE DO?</h1>
        <div className="row text-center">
          <div className="col-md-4 services">
            <img src="hooo.png" className="service-img" />
            <h4>Growth Marketing</h4>
            <p>
              <span>
                >"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </span>
            </p>
          </div>
          <div className="col-md-4 services">
            <img src="inspired-sales-culture.png" className="service-img" />
            <h4>Sales</h4>
            <p>
              <span>
                >"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </span>
            </p>
          </div>
          <div className="col-md-4 services">
            <img src="Branding.Marketing.jpg" className="service-img" />
            <h4>Online Branding</h4>
            <p>
              <span>
                >"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </span>
            </p>
          </div>
        </div>
        <button type="button" className="btn btn-primary">
          All Services
        </button>
      </div>
    </section>

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
            <img src="AI-circuit-board-tech-16.9.jpg" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>

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
          <a href="#">
            <img src="_65QFl7B.png" />
          </a>
        </div>
      </div>
    </section>

    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-box">
            <img src="artup logo 1.jpg" />
            <p>
              <span>
                >"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
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
  </>
);

export default Index;
