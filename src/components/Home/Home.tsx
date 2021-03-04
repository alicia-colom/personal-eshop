import React from "react";

const Home = () => {
  return (
    <div>
      <section>
        <div id="slides-shop" className="cover-slides">
          <ul className="slides-container">
            <li className="text-center">
              <img src="images/banner-01.jpg" alt="" />
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="m-b-20">
                      <strong>Welcome To Freshshop</strong>
                    </h1>
                    <p className="m-b-40">
                      See how your users experience your website in realtime or
                      view rends to see any changes in performance over time.
                    </p>
                    <p>
                      <a className="btn hvr-hover" href="#">
                        Shop New
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="text-center">
              <img src="images/banner-02.jpg" alt="" />
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="m-b-20">
                      <strong>Welcome To Freshshop</strong>
                    </h1>
                    <p className="m-b-40">
                      See how your users experience your website in realtime or
                      view trends to see any changes in performance over time.
                    </p>
                    <p>
                      <a className="btn hvr-hover" href="#">
                        Shop New
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="text-center">
              <img src="images/banner-03.jpg" alt="" />
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="m-b-20">
                      <strong>Welcome To Freshshop</strong>
                    </h1>
                    <p className="m-b-40">
                      See how your users experience your website in realtime or
                      view trends to see any changes in performance over time.
                    </p>
                    <p>
                      <a className="btn hvr-hover" href="#">
                        Shop New
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="slides-navigation">
            <a href="#" className="next">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </a>
            <a href="#" className="prev">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </section>
      <section>Equipo</section>
      <section>Sección 1</section>
      <section>Sección 2</section>
      <section>Banners publicitarios</section>
    </div>
  );
};

export default Home;
