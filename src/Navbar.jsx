import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import logo from "../src/img/logo-white.png";
import MainMenu from "./MainMenu";

const Navbar = () => {
  const [show, setShow] = React.useState();

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <div>
      <section className="top_header_section pl-170 pr-170">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="top_social_medi">
                <ul className="d-flex align-items-center justify-content-start mb-0">
                  <li>
                    <a href="#">
                      <i class="ph-facebook-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ph-twitter-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ph-instagram-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ph-linkedin-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ph-rss"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="top_right_content">
                <ul className="d-flex align-items-center justify-content-end mb-0">
                  <li>
                    <a href="#">
                      <i class="ph-envelope-simple"></i> info@excellisit.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="ph-phone"></i> (+91) 861 772 4646
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id={scroll ? "fixed" : "no-fixed"}
        className="main_nav_sec pl-170 pr-170"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <nav class="navbar navbar-expand-lg pr-0">
                <div className="logo">
                  <img src={logo} />
                </div>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <button className="menu_open" onClick={() => setShow(true)}>
                  <i class="ph-list"></i>
                </button>

                <div
                  class="collapse navbar-collapse justify-content-end pr-5"
                  id="navbarNav"
                >
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <a class="nav-link" href="/">
                        Home{" "}
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="about">
                        About Us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Our Services
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        Partner With Us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " href="#">
                        Career
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " href="#">
                        Contatc Us
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className={`fullscreennav ${show ? "show" : ""}`}>
        <MainMenu />
        <button class="action action--close" onClick={() => setShow(false)}>
          <i class="ph-x"></i>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
