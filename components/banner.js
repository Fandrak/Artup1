import whirl from "../images/whirl.jpg";

const Banner = () => (
  <section id="banner">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p className="promo-title">Best Services Worldwide</p>
          <p>
            <span>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </span>
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src={whirl} className="img-fluid" />
        </div>
      </div>
    </div>
  </section>
);

export default Banner;
