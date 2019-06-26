import logo from "../images/artup-logo.jpg";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const MyLink = ({ id, title }) => (
  <ScrollLink
    activeClass="active"
    className="nav-link"
    to={id}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
  >
    {title}
  </ScrollLink>
);

const Navbar = ({ user }) => (
  <section id="nav-bar">
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <img src={logo} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <MyLink id="banner" title="Home" />
          </li>
          <li className="nav-item">
            <MyLink id="services" title="Services" />
          </li>
          <li className="nav-item">
            <MyLink id="about-us" title="About" />
          </li>
          <li className="nav-item">
            <MyLink id="social-media" title="Contact" />
          </li>
          <li className="nav-item">
            {!user ? (
              <a className="nav-link" href="#">
                Employees
              </a>
            ) : (
              <Link href="/admin">
                <a className="nav-link">{user}</a>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  </section>
);

export default Navbar;
