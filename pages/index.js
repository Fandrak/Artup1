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
    <html>
  <head>
    <title>ARTup</title>
    <link rel="stylesheet" href="style.css" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    />
  </head>
  <body>
    <section id="nav-bar">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#"><img src="pages\artup logo 1.jpg"/></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#top">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about-us">Aout</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#social-media">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Employees</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
   
    <section id="banner">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <p class="promo-title">Best Services Worldwide</p>
            <p>
              <span
                >"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </span>
            </p>
          </div>
          <div class="col-md-6 text-center">
            <img src="ORD5GB.jpg" class="img-fluid" />
          </div>
        </div>
      </div>
    </section>

   

    <section id="services">
      <div class="container text-center">
        <h1 class="title">WHAT WE DO?</h1>
        <div class="row text-center">
          <div class="col-md-4 services">
            <img src="hooo.png" class="service-img" />
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
          <div class="col-md-4 services">
            <img src="inspired-sales-culture.png" class="service-img" />
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
          <div class="col-md-4 services">
            <img src="Branding.Marketing.jpg" class="service-img" />
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
        <button type="button" class="btn btn-primary">All Services</button>
      </div>
    </section>

    
   
    <section id="about-us">
      <div class="container">
        <h1 class="title text-center">WHY CHOOSE US</h1>
        <div class="row">
          <div class="col-md-6 about us">
            <p class="about-title">Why we're different</p>
            <ul>
              <li>Believes in doing business with honesty</li>
              <li>Believes in doing business with honesty</li>
              <li>Believes in doing business with honesty</li>
              <li>Believes in doing business with honesty</li>
              <li>Believes in doing business with honesty</li>
              <li>Believes in doing business with honesty</li>
            </ul>
          </div>
          <div class="col-md-6">
            <img src="AI-circuit-board-tech-16.9.jpg" class="img-fluid" />
          </div>
        </div>
      </div>
    </section>

   

    <section id="social-media">
      <div class="container text-center">
        <p>FIND US ON SOCIAL MEDIA</p>
        <div class="social-icons">
          <a href="#"><img src="facebook-2661207_960_720.jpg"/></a>
          <a href="#"><img src="linkedin.png"/></a>
          <a href="#"><img src="_65QFl7B.png"/></a>
        </div>
      </div>
    </section>
  </body>
</html>



<section id="footer">
  <div class="container">
    <div class="row">
      <div class="col-md-4 footer-box">
        <img src="artup logo 1.jpg" />
        <p>
          <span>
            >"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </span>
        </p>
      </div>
      <div class="col-md-4 footer-box">
        <p><b>CONTAT US</b></p>
        <p><i class="fa fa-map-marker"></i>Prague 13, Czechia</p>
        <p><i class="fa fa-phone"></i>+420 603805518</p>
        <p><i class="fa fa-envelope-o"></i>artup@artup.cz</p>
      </div>
      <div class="col-md-4 footer-box">
        <p><b>SUBSCRIBE NEWSLETTER</b></p>
        <input type="email" class="form-control" placeholder="Your Email" />
        <button type="button" class="btn btn-primary">SUBSCRIBE</button>
      </div>
    </div>
  </div>
</section>

  </>
);

export default Index;
