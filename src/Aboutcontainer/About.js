import React from "react";
import { useEffect, useState, useRef } from "react";
import InnerBanner from "../InnerBanner";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../src/Aboutcontainer/about.css";
import "../../src/Appcontainer/assets/Style.css";
import ThreeScense from "../Appcontainer/ThreeScene";
import gallery1 from "../../src/img/gallery/1.jpg";
import gallery2 from "../../src/img/gallery/2.jpg";
import gallery3 from "../../src/img/gallery/3.jpg";
import gallery4 from "../../src/img/gallery/4.jpg";
import gallery5 from "../../src/img/gallery/5.jpg";
import gallery6 from "../../src/img/gallery/6.jpg";
import project1 from "../../src/img/industries1.jpg";
import project2 from "../../src/img/industries2.jpg";
import project3 from "../../src/img/industries2.jpg";
import ab from "../../src/img/ab.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from "../img/arrow-right-solution.svg";
import pic from "../../src/img/pic.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={arrow} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={arrow} style={{ transform: "rotate(180deg)" }} />
    </div>
  );
}

const About = () => {
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
      <Navbar />
      <div className="hero_banner_sec">
        <ThreeScense />
      </div>
      <InnerBanner />

      <section class="banner_after">
        <div class="container">
          <div class="locla">
            <div class="text_locla">
              <h2>THE EXCELLIS STORY</h2>
            </div>
          </div>
          <div class="locla_text">
            <div class="row">
              <div class="col-xl-5 order-2 order-sm-1">
                <p>
                  We started like you did: a potent mixture of passion and work
                  ethic, combined with the insight to recognize a problem and
                  envision a solution. In our case, we saw a lack of
                  transparency and efficiency in digital agencies. Too many
                  design and development companies slapped a shiny coat a paint
                  on a poorly made product, then bailed, leaving their clients
                  high and dry.
                </p>
              </div>
              <div class="col-xl-7 order-1 order-sm-2">
                <img src={ab} alt="" class="img-fluid" />
              </div>
            </div>
          </div>
          <div class="left_master">
            <div class="row">
              <div class="col-xl-7">
                <h3>
                  THERE WAS A SMARTER, BETTER WAY TO RUN A DESIGN AND
                  DEVELOPMENT AGENCY. SO WE STARTED OUR OWN.
                </h3>
              </div>
              <div class="col-xl-4">
                <p>
                  160+ clients, millions of end-users, and thousands of designs
                  later, we’re an award-winning agency that’s worked with some
                  of the biggest brands around. But we haven’t forgotten why we
                  started in the first place: to make the digital world a
                  friendlier place.
                </p>
              </div>
            </div>
          </div>
          <div class="text_left_img">
            <div class="radial-bg"></div>
            <div class="line-box"></div>
            <div class="row">
              <div class="col-xl-7">
                <div class="up_img">
                  <img src={gallery1} alt="" class="img-fluid" />
                </div>
              </div>
              <div class="col-xl-5">
                <p>
                  “The comments we receive about from our customers about how
                  beautiful the website is, how easy it is to use, and how
                  elegantly it flows, I think that speaks to the quality of work
                  that Codal does.”
                </p>
                <span>James Langer Founder & CEO, Joriki</span>
              </div>
            </div>
          </div>
          <div class="four">
            <div class="locla1">
              <h2>THE EXCELLIS STORY</h2>
            </div>
            <p class="black_p">
              Our process may be data-driven, but our projects are fueled by
              something much stronger: passion. We don’t clock in at 9 and clock
              out at 5 - we work around the clock.
            </p>
            <div class="locla_text">
              <div class="row">
                <div class="col-xl-5">
                  <p>
                    We hail from different backgrounds, different lifestyles.
                    We’re home to a self-taught design guru and a fashionista
                    turned software developer, and we’re pretty sure we’re the
                    only company that employs both a former Army engineer and a
                    viral video star. These are the threads that form the rich
                    tapestry that is Codal. Here, everyone gets a seat at the
                    table, which means everyone gets to share a lifetime of
                    their experiences, their perspective, their story. Because
                    while our business cards might say we’re designers,
                    engineers, marketers, and developers, really we all have the
                    same job title: storyteller. Every website we design, every
                    app we build, and every solution we create bears our
                    fingerprints. Our work tells our story. And we want to help
                    you tell yours. Because we’re more than just an agency.
                    We’re your partner.
                  </p>
                </div>
                <div class="col-xl-7">
                  <div class="img_c">
                    <div
                      class="reveal-block right custom_aos"
                      data-aos="reveal-right"
                    >
                      <div
                        class="reveal-holder custom_aos"
                        data-aos="reveal-item"
                      ></div>
                      <img src={pic} className="" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="five">
            <div class="reveal-block right custom_aos" data-aos="reveal-right">
              <div
                class="reveal-holder custom_aos"
                data-aos="reveal-item"
              ></div>
              <div class="title_c">
                <h2>THE CODAL MISSION</h2>
                <p>
                  Our mission is simple: Work with the best, design with a
                  purpose, and engineer for a sustainable future.
                </p>
              </div>
            </div>
            <div class="eight_sec">
              <div class="row">
                <div class="col-xl-3 col-6">
                  <div class="item_a">
                    <div class="img-c">
                      <img
                        src="http://web.archive.org/web/20210812104420im_/https://mk0codal8u9q2enn1dd.kinstacdn.com/wp-content/uploads/2019/02/about-logo-01.svg"
                        alt=""
                      />
                    </div>
                    <div class="title-inner">
                      <img
                        src="http://web.archive.org/web/20210812104420im_/https://mk0codal8u9q2enn1dd.kinstacdn.com/wp-content/uploads/2019/02/about-logo-big-01.svg"
                        alt=""
                      />
                      <h3 class="txt-c">FULL TRANSPARENCY</h3>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-6">
                  <div class="item_a">
                    <div class="img-c">
                      <img
                        src="http://web.archive.org/web/20210812104420im_/https://mk0codal8u9q2enn1dd.kinstacdn.com/wp-content/uploads/2019/02/about-logo-01.svg"
                        alt=""
                      />
                    </div>
                    <div class="title-inner">
                      <img
                        src="http://web.archive.org/web/20210812104420im_/https://mk0codal8u9q2enn1dd.kinstacdn.com/wp-content/uploads/2019/02/about-logo-big-01.svg"
                        alt=""
                      />
                      <h3 class="txt-c">FULL TRANSPARENCY</h3>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-6">
                  <div class="item_a">
                    <div class="img-c">
                      <img
                        src="http://web.archive.org/web/20210812104420im_/https://mk0codal8u9q2enn1dd.kinstacdn.com/wp-content/uploads/2019/02/about-logo-01.svg"
                        alt=""
                      />
                    </div>
                    <div class="title-inner">
                      <img
                        src="http://web.archive.org/web/20210812104420im_/https://mk0codal8u9q2enn1dd.kinstacdn.com/wp-content/uploads/2019/02/about-logo-big-01.svg"
                        alt=""
                      />
                      <h3 class="txt-c">FULL TRANSPARENCY</h3>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-6">
                  <div class="item_a">
                    <div class="img-c">
                      <img
                        src="http://web.archive.org/web/20210812104420im_/https://mk0codal8u9q2enn1dd.kinstacdn.com/wp-content/uploads/2019/02/about-logo-01.svg"
                        alt=""
                      />
                    </div>
                    <div class="title-inner">
                      <img
                        src="http://web.archive.org/web/20210812104420im_/https://mk0codal8u9q2enn1dd.kinstacdn.com/wp-content/uploads/2019/02/about-logo-big-01.svg"
                        alt=""
                      />
                      <h3 class="txt-c">FULL TRANSPARENCY</h3>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-6">
                  <div class="item_a">
                    <div class="img-c">
                      <img
                        src="http://web.archive.org/web/20210812104420im_/https://mk0codal8u9q2enn1dd.kinstacdn.com/wp-content/uploads/2019/02/about-logo-01.svg"
                        alt=""
                      />
                    </div>
                    <div class="title-inner">
                      <img
                        src="http://web.archive.org/web/20210812104420im_/https://mk0codal8u9q2enn1dd.kinstacdn.com/wp-content/uploads/2019/02/about-logo-big-01.svg"
                        alt=""
                      />
                      <h3 class="txt-c">FULL TRANSPARENCY</h3>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-6">
                  <div class="item_a">
                    <div class="img-c">
                      <img
                        src="http://web.archive.org/web/20210812104420im_/https://mk0codal8u9q2enn1dd.kinstacdn.com/wp-content/uploads/2019/02/about-logo-01.svg"
                        alt=""
                      />
                    </div>
                    <div class="title-inner">
                      <img
                        src="http://web.archive.org/web/20210812104420im_/https://mk0codal8u9q2enn1dd.kinstacdn.com/wp-content/uploads/2019/02/about-logo-big-01.svg"
                        alt=""
                      />
                      <h3 class="txt-c">FULL TRANSPARENCY</h3>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-6">
                  <div class="item_a">
                    <div class="img-c">
                      <img
                        src="http://web.archive.org/web/20210812104420im_/https://mk0codal8u9q2enn1dd.kinstacdn.com/wp-content/uploads/2019/02/about-logo-01.svg"
                        alt=""
                      />
                    </div>
                    <div class="title-inner">
                      <img
                        src="http://web.archive.org/web/20210812104420im_/https://mk0codal8u9q2enn1dd.kinstacdn.com/wp-content/uploads/2019/02/about-logo-big-01.svg"
                        alt=""
                      />
                      <h3 class="txt-c">FULL TRANSPARENCY</h3>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-6">
                  <div class="item_a">
                    <div class="img-c">
                      <img
                        src="http://web.archive.org/web/20210812104420im_/https://mk0codal8u9q2enn1dd.kinstacdn.com/wp-content/uploads/2019/02/about-logo-01.svg"
                        alt=""
                      />
                    </div>
                    <div class="title-inner">
                      <img
                        src="http://web.archive.org/web/20210812104420im_/https://mk0codal8u9q2enn1dd.kinstacdn.com/wp-content/uploads/2019/02/about-logo-big-01.svg"
                        alt=""
                      />
                      <h3 class="txt-c">FULL TRANSPARENCY</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="six">
            <div class="slick_slider">
              <div class="top-block row">
                <div class="col-xl-5">
                  <div class="left-block">
                    <h2>
                      <span>PROJECTS THAT INSPIRE</span>
                    </h2>
                  </div>
                </div>
                <div class="col-xl-7">
                  <div class="right-block">
                    <Slider
                      className="slider-for"
                      asNavFor={nav2}
                      ref={slider1}
                      fade={true}
                      dots={false}
                      slidesToShow={1}
                      slidesToScroll={1}
                      arrows={false}
                    >
                      <div className="single_project">
                        <h2>Building Brands From The Ground Up</h2>
                        <p>
                          Our mission is simple: Work with the best, design with
                          a purpose, and engineer for a sustainable future.
                        </p>
                        <a href="" class="view_all">
                          View All
                        </a>
                      </div>
                      <div className="single_project">
                        <h2>Wielding Technology For Good</h2>
                        <p>
                          Our mission is simple: Work with the best, design with
                          a purpose, and engineer for a sustainable future.
                        </p>
                        <a href="" class="view_all">
                          View All
                        </a>
                      </div>
                      <div className="single_project">
                        <h2>Being More Than An Agency</h2>
                        <p>
                          Our mission is simple: Work with the best, design with
                          a purpose, and engineer for a sustainable future.
                        </p>
                        <a href="" class="view_all">
                          View All
                        </a>
                      </div>
                      <div className="single_project">
                        <h2>Building Brands From The Ground Up</h2>
                        <p>
                          Our mission is simple: Work with the best, design with
                          a purpose, and engineer for a sustainable future.
                        </p>
                        <a href="" class="view_all">
                          View All
                        </a>
                      </div>
                      <div className="single_project">
                        <h2>Wielding Technology For Good</h2>
                        <p>
                          Our mission is simple: Work with the best, design with
                          a purpose, and engineer for a sustainable future.
                        </p>
                        <a href="" class="view_all">
                          View All
                        </a>
                      </div>
                      <div className="single_project">
                        <h2>Being More Than An Agency</h2>
                        <p>
                          Our mission is simple: Work with the best, design with
                          a purpose, and engineer for a sustainable future.
                        </p>
                        <a href="" class="view_all">
                          View All
                        </a>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
              <div class="bottom-block">
                <Slider
                  asNavFor={nav1}
                  ref={slider2}
                  slidesToShow={1}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  className="slider-nav"
                  arrows={true}
                  dots={false}
                  centerMode={true}
                  focusOnSelect={true}
                  nextArrow={<SampleNextArrow />}
                  prevArrow={<SamplePrevArrow />}
                >
                  <div>
                    <div class="img_slick">
                      <div class="overlay_img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/excellis-it.appspot.com/o/industries1.jpg?alt=media&token=16ffe27e-93ec-4ad5-af35-54291abe7f30" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="img_slick">
                      <div class="overlay_img">
                        <img src={project2} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="img_slick">
                      <div class="overlay_img">
                        <img src={project3} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="img_slick">
                      <div class="overlay_img">
                        <img src={project1} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="img_slick">
                      <div class="overlay_img">
                        <img src={project2} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="img_slick">
                      <div class="overlay_img">
                        <img src={project3} />
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div class="meet-our-team">
          <div class="title-c">
            <div class="left-block">
              <h2>
                <span>meet our team</span>
              </h2>
            </div>
            <div class="right-block 1">
              <span
                class="img-overlay"
                style={{
                  backgroundImage: "url(" + gallery1 + ")",
                  backgroundSize: "cover",
                }}
              >
                <span></span>
              </span>
            </div>
          </div>
          <div class="content-c">
            <span
              class="img-overlay"
              style={{
                backgroundImage: "url(" + gallery6 + ")",
                backgroundSize: "cover",
              }}
            >
              <span></span>
            </span>
            <span
              class="img-overlay"
              style={{
                backgroundImage: "url(" + gallery2 + ")",
                backgroundSize: "cover",
              }}
            >
              <span></span>
            </span>
            <span
              class="img-overlay"
              style={{
                backgroundImage: "url(" + gallery3 + ")",
                backgroundSize: "cover",
              }}
            >
              <span></span>
            </span>
            <span
              class="img-overlay"
              style={{
                backgroundImage: "url(" + gallery4 + ")",
                backgroundSize: "cover",
              }}
            >
              <span></span>
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
