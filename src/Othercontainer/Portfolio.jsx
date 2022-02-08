import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import InnerBanner from "../InnerBanner";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Portfolio = ({ activeStatus }) => {
  const title = "Portfolio";
  const description =
    "“The people at Codal are what makes them really stand out. They were responsive, attentive, flexible and they sought to understand my business so they could plan ahead—beyond the development project.”";
  const fmapp =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2F5.png?alt=media&token=c79de80f-91e1-4976-96de-5438a3e75835";
  const atpata =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2FAtpata.jpg?alt=media&token=dfded930-0331-4b39-8c10-5bbba96de316";
  const bill_specialist =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2FBill_Specialists.jpg?alt=media&token=070aa59d-943e-403a-9586-c139c67bcd4f";
  const country_land_aus =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2FCountry_Land_Australia.jpg?alt=media&token=95539cf5-5547-4fe5-8405-c4fd5b8266b5";
  const excellis_reality =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2FExcellis_Realty.jpg?alt=media&token=e2ff9a2b-a804-4395-a69c-f778b97f5111";
  const fm_holidays =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2FFM_Holidays.jpg?alt=media&token=e4f9a957-13f1-43a9-959b-d7ac476a8cab";
  const fm_ostello =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2FFM_Ostello.jpg?alt=media&token=9dec33d6-cd7d-4c1e-94b1-04e16c8b793d";

  const lederfield =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/portfolio%2Fladerfield.jpg?alt=media&token=9a28cd72-94c6-4788-bebc-1566da33fb25";

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
                        <h4>Atpata</h4>
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
                              <img src={atpata} className="img-fluid" />
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
                        <h4>Country Land Australia</h4>
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
                                src={country_land_aus}
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
                        <h4>FM Holidays</h4>
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
                              <img src={fm_holidays} className="img-fluid" />
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
                        <h4>FMOstello</h4>
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
                              <img src={fm_ostello} className="img-fluid" />
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
                        <h4>Excellis Reality</h4>
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
                                src={excellis_reality}
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
                        <h4>Laderfield</h4>
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
                              <img src={lederfield} className="img-fluid" />
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
        <div className="mobile_app_portfolio">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="app_slider">
                  <Swiper
                    grabCursor="true"
                    centeredSlides="true"
                    spaceBetween={0}
                    slidesPerView={4}
                    loop="true"
                    effect="coverflow"
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: false,
                    }}
                    breakpoints={{
                      700: {
                        spaceBetween: 0,
                        slidesPerView: 4,
                      },
                      500: {
                        spaceBetween: 100,
                        slidesPerView: 2,
                      },
                      411: {
                        spaceBetween: 100,
                        slidesPerView: 2,
                      },
                      300: {
                        spaceBetween: 0,
                        slidesPerView: 1,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <img src={fmapp} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={fmapp} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={fmapp} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={fmapp} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={fmapp} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={fmapp} />
                    </SwiperSlide>
                  </Swiper>
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
