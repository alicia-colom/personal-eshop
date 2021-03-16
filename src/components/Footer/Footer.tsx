import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-main">
          <div className="container">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="footer-widget">
                <h4>About Freshshop</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="footer-top-box">
                <h3>Social Media</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <ul>
                  <li>
                    <a href="#" title="">
                      <i className="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <i className="fab fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <i className="fab fa-github" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="footer-link-contact">
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <p>
                      <i className="fas fa-map-marker-alt"></i>Address: Michael
                      I. Days 3756 Preston Street Wichita, KS 67213
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-phone-square"></i>Phone:
                      <a href="tel:+1-888705770" title="">
                        +1-888 705 770
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-envelope"></i>Email:
                      <a href="mailto:contactinfo@gmail.com" title="">
                        contactinfo@gmail.com
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p className="footer-company">
            Todos los derechos reservados &copy; 2021
            <a href="#" title="">
              Personal eshop
            </a>
            Creado por Alicia Colom e Irene Rueda
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
