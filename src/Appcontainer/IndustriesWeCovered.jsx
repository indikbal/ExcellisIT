import React from "react";
import { useEffect, useState, useRef } from "react";
import "./assets/Style.css";
import Typed from "react-typed";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import industries1 from "../../src/img/industries1.jpg";
import industries2 from "../../src/img/industries2.jpg";
import industries3 from "../../src/img/industries3.jpg";
// import * as $ from "jquery";
// import "slick-carousel";

const IndustriesWeCovered = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  //i dont seem to need this
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <div>
      <section className="industries_slider_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pl-0 pr-0">
              <div className="section_typing">
                <Typed strings={["Our Featured Services"]} typeSpeed={150} />
              </div>

              <div className="indus_slider_wrapper">
                <Slider
                  className="slider-for"
                  asNavFor={nav2}
                  ref={slider1}
                  fade={true}
                  dots={false}
                >
                  <div className="industries_bg">
                    <img src={industries1} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries2} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries3} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries2} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries1} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries2} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries3} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries2} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries1} className="img-fluid" />
                  </div>
                </Slider>
                <Slider
                  asNavFor={nav1}
                  ref={slider2}
                  slidesToShow={4}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  className="slider-nav"
                  arrows={false}
                  autoplay
                  autoplaySpeed={5000}
                  speed={1000}
                  dots={false}
                >
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Travel & Tourism</h4>
                      <p>
                        As an experienced travel & hospitality software
                        development company, we always strives for developing
                        next-gen and powerful software and mobile applications.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Banking & Finance</h4>
                      <p>
                        Excellis IT is a prominent banking & financial software
                        development company that offers industry-leading
                        software, mobile applications, portals, and solutions
                        that are secure, fast, efficient, and easily scalable.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Real Estate & Property</h4>
                      <p>
                        while making real estate business more connected and
                        easily reachable for maximum engagement, our versatile
                        real estate developers offer businesses the most
                        invincible real estate software and applications for web
                        and smartphones.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Retail</h4>
                      <p>
                        Technology is the reason behind the catalytic growth of
                        the retail and eCommerce industry. And we, at Excellis
                        IT, design and develop web and mobile applications and
                        solutions that foster user engagement and efficiency to
                        boost business growth like never before.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Manufacturing</h4>
                      <p>
                        Excellis It provides wide range of Manufacturing IT
                        Services that combat your production challenges while
                        empowering your business to inspire innovation.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Energy</h4>
                      <p>
                        Excellis IT is a leading Hybrid IT solutions provider to
                        power your business systems.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Media & Enrtainment</h4>
                      <p>
                        Excellis IT provides reliability at scale for content
                        companies, build customer 360 platforms to offer
                        personalized services, implement media supply chains in
                        the cloud for agility and flexibility, and streamline
                        media operations.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Telecom</h4>
                      <p>
                        Excellis IT helps you with the most innovative and
                        efficient enterprise & business solutions that
                        streamline business processes and minimize challenges in
                        telecommunication market.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Food & Restaurant</h4>
                      <p>
                        Food and Beverages are not only a great part of our
                        lives but they are a huge part of online business as
                        well. For this mushrooming business, Excellis IT bring
                        the most innovative and impressively smart web and
                        mobile development solutions.
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>

              {/* <div className="indus_slider_wrapper">
                <div className="slider-for">
                  <div className="industries_bg">
                    <img src={industries1} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries2} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries3} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries2} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries1} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries2} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries3} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries2} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries1} className="img-fluid" />
                  </div>
                </div>
                <div className="slider-nav">
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Travel & Tourism</h4>
                      <p>
                        As an experienced travel & hospitality software
                        development company, we always strives for developing
                        next-gen and powerful software and mobile applications.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Banking & Finance</h4>
                      <p>
                        Excellis IT is a prominent banking & financial software
                        development company that offers industry-leading
                        software, mobile applications, portals, and solutions
                        that are secure, fast, efficient, and easily scalable.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Real Estate & Property</h4>
                      <p>
                        while making real estate business more connected and
                        easily reachable for maximum engagement, our versatile
                        real estate developers offer businesses the most
                        invincible real estate software and applications for web
                        and smartphones.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Retail</h4>
                      <p>
                        Technology is the reason behind the catalytic growth of
                        the retail and eCommerce industry. And we, at Excellis
                        IT, design and develop web and mobile applications and
                        solutions that foster user engagement and efficiency to
                        boost business growth like never before.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Manufacturing</h4>
                      <p>
                        Excellis It provides wide range of Manufacturing IT
                        Services that combat your production challenges while
                        empowering your business to inspire innovation.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Energy</h4>
                      <p>
                        Excellis IT is a leading Hybrid IT solutions provider to
                        power your business systems.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Media & Enrtainment</h4>
                      <p>
                        Excellis IT provides reliability at scale for content
                        companies, build customer 360 platforms to offer
                        personalized services, implement media supply chains in
                        the cloud for agility and flexibility, and streamline
                        media operations.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Telecom</h4>
                      <p>
                        Excellis IT helps you with the most innovative and
                        efficient enterprise & business solutions that
                        streamline business processes and minimize challenges in
                        telecommunication market.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Food & Restaurant</h4>
                      <p>
                        Food and Beverages are not only a great part of our
                        lives but they are a huge part of online business as
                        well. For this mushrooming business, Excellis IT bring
                        the most innovative and impressively smart web and
                        mobile development solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="indus_slider_wrapper">
                <Slider {...settings}>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Agriculture</h4>
                      <p>
                        Sports is a multibillion-dollar market and we know how
                        to help you to develop platforms like sports web and
                        mobile applications that can channelize revenue to your
                        side.
                      </p>
                    </div>
                    <img src={industries1} />
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Agriculture</h4>
                      <p>
                        Sports is a multibillion-dollar market and we know how
                        to help you to develop platforms like sports web and
                        mobile applications that can channelize revenue to your
                        side.
                      </p>
                    </div>
                    <img src={industries2} />
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Agriculture</h4>
                      <p>
                        Sports is a multibillion-dollar market and we know how
                        to help you to develop platforms like sports web and
                        mobile applications that can channelize revenue to your
                        side.
                      </p>
                    </div>
                    <img src={industries1} />
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Agriculture</h4>
                      <p>
                        Sports is a multibillion-dollar market and we know how
                        to help you to develop platforms like sports web and
                        mobile applications that can channelize revenue to your
                        side.
                      </p>
                    </div>
                    <img src={industries2} />
                  </div>
                </Slider>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default IndustriesWeCovered;
