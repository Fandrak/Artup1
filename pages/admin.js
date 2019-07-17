import logo from "../images/artup-logo.jpg";
import user from "../pages/index";
import Link from "next/link";

import "../styles.scss";

const Admin = ({ user, data }) => {
  return (
    <>
      <section id="admin">
        <div className="container text-center">
          <h1 className="title">HELLO!</h1>
          <h1>
            {!user ? (
              <a className="nav-link" href="#">
                User
              </a>
            ) : (
              <Link href="/admin">
                <a className="nav-link">{user}</a>
              </Link>
            )}
          </h1>
        </div>
        <ul>
          {Object.entries(data.users).map(([key, user], index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
        <input type="email" className="form-control" placeholder="Your Email" />
        <input
          type="password"
          className="form-control"
          placeholder="Your Password"
        />
        <button type="button" className="btn btn-primary">
          Submit
        </button>
      </section>
      <section id="admin-image">
        <div className="container text-center">
          <img src={logo} className="admin-img" />
        </div>
      </section>
    </>
  );
};

export default Admin;
