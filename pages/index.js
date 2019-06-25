import Link from "next/link";
import MyDocument from "next/document";
import "../styles.scss";

const Index = () => (
  //    <section>
  //         <h1>Hello Wolrd from NEXT JS</h1>
  //         <Link href="/about">
  //             <a title="About NextJS">About This Project</a>
  //         </Link>
  //     </section>
  <>
    <div className="header">
      <h1>ARTup</h1>
      <p>bring your ART up!</p>
    </div>
    <div className="nav">
      <div className="container">
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Employees</li>
        </ul>
      </div>
    </div>
    <p className="about">ARTup is a ....</p>
  </>
);

export default Index;
