import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import InnerBanner from "../InnerBanner";
import { Helmet } from "react-helmet";
import ContactSection from "../Appcontainer/ContactSection";
import { Link } from "react-router-dom";

const Portfolio = ({ activeStatus }) => {
  const title = "Portfolio";
  const description =
    "“The people at Codal are what makes them really stand out. They were responsive, attentive, flexible and they sought to understand my business so they could plan ahead—beyond the development project.”";
  const flightmantra =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2Fflightmantra.jpg?alt=media&token=37d3da84-0576-4768-9b46-bfe4ac49a8a3";

  const billexpert =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/billexperts.jpg?alt=media&token=7f3d4a1c-ab2c-4d3d-80ae-69f94ee94bc9";

  const feel =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2Ffeelfresh.png?alt=media&token=877aef4b-b58c-4ab9-99b6-e49d0dfba4ab";

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio</title>
        <meta name="description" content="aboutpage" />
        <meta name="keywords" content="about page" />
      </Helmet>
      <Navbar activeStatus="partner" />
      <InnerBanner title={title} description={description} />
      <section className="portfolio_sec pl-5 pr-170">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="portfolio_inner">
                <div className="single_portfolio">
                  <div className="row align-items-center">
                    <div className="col-md-4 pr-0">
                      <div className="portfolio_desc">
                        <h6>DESIGNING & DEVELOPMENT</h6>
                        <h4>FlightMantra</h4>
                        <p>
                          We knew how to combine the design and technological
                          aspect that delivers on the promise made to the
                          client. We used the best of the technological stack,
                          kept the right formulation for content and visual
                          depiction and produced a website that is fast to load,
                          provide easy information and have the users find all
                          they are looking for while being fully engaged.
                        </p>
                        <a href="#" className="visit_portfolio">
                          Visit Link
                        </a>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="portfolio_imgwrapper" data-aos="flip-up">
                        <div className="overflow_hidden">
                          <div className="portfolio_img_box">
                            <div className="show_port_folio_img">
                              <img
                                src={feel}
                                alt="flightmantra portfolio"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single_portfolio">
                  <div className="row align-items-center">
                    <div className="col-md-4 pr-0">
                      <div className="portfolio_desc">
                        <h6>DESIGNING & DEVELOPMENT</h6>
                        <h4>FlightMantra</h4>
                        <p>
                          We knew how to combine the design and technological
                          aspect that delivers on the promise made to the
                          client. We used the best of the technological stack,
                          kept the right formulation for content and visual
                          depiction and produced a website that is fast to load,
                          provide easy information and have the users find all
                          they are looking for while being fully engaged.
                        </p>
                        <a href="#" className="visit_portfolio">
                          Visit Link
                        </a>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="portfolio_imgwrapper" data-aos="fade-up">
                        <div className="overflow_hidden">
                          <div className="portfolio_img_box">
                            <div className="show_port_folio_img">
                              <img
                                src={feel}
                                alt="flightmantra portfolio"
                                className="img-fluid"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
