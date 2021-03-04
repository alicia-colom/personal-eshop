import React from "react";

const Header = () => {
  return (
    <header className="main-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-menu"
              aria-controls="navbars-rs-food"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="index.html">
              <img src="images/logo.png" className="logo" alt="" />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul
              className="nav navbar-nav ml-auto"
              data-in="fadeInDown"
              data-out="fadeOutUp"
            >
              <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  Equipo
                </a>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle arrow"
                  data-toggle="dropdown"
                >
                  Tienda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact-us.html">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="attr-nav">
          <div className="side-menu">
            <a href="#">
              <i className="fa fa-shopping-bag"></i>
              <span className="badge">0</span>
              <p>My Cart</p>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
