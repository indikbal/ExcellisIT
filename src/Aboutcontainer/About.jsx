import React from "react";
import { useEffect, useState, useRef } from "react";
import InnerBanner from "../InnerBanner";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./about.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet";
import Loader from "../Loader";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/arrow-right-solution.svg?alt=media&token=0f33e4b8-e86d-4a67-ac07-ac443cd26962" />
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
      <img
        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/arrow-right-solution.svg?alt=media&token=0f33e4b8-e86d-4a67-ac07-ac443cd26962"
        style={{ transform: "rotate(180deg)" }}
      />
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
  const title = "About Us";
  const description =
    "“The people at Codal are what makes them really stand out. They were responsive, attentive, flexible and they sought to understand my business so they could plan ahead—beyond the development project.”";
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us Page</title>
        <meta name="description" content="aboutpage" />
        <meta name="keywords" content="about page" />
      </Helmet>
      <Loader />
      <Navbar />
      <InnerBanner title={title} description={description} />

      <section class="banner_after">
        <div class="container">
          <div class="locla">
            <div class="text_locla">
              <h2>THE EXCELLIS STORY</h2>
            </div>
          </div>
          <div class="locla_text">
            <div class="row">
              <div class="col-xl-5 order-2 order-sm-1" data-aos="fade-up">
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
                <div class="reveal-holder custom_aos" data-aos="reveal-item">
                  <div
                    class="reveal-block right custom_aos"
                    data-aos="reveal-right"
                  ></div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/ab.jpg?alt=media&token=6cd9d869-32a9-4b1c-9296-c3efafb7edef"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="left_master">
            <div class="row">
              <div class="col-xl-7">
                <div className="left_master_title">
                  <div class="reveal-holder custom_aos" data-aos="reveal-item">
                    <div
                      class="reveal-block right custom_aos"
                      data-aos="reveal-right"
                    ></div>
                    <h3>
                      THERE WAS A SMARTER, BETTER WAY TO RUN A DESIGN AND
                      DEVELOPMENT AGENCY. SO WE STARTED OUR OWN.
                    </h3>
                  </div>
                </div>
              </div>
              <div class="col-xl-4" data-aos="fade-up">
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
                  <div class="reveal-holder custom_aos" data-aos="reveal-item">
                    <div
                      class="reveal-block right custom_aos"
                      data-aos="reveal-right"
                    ></div>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/1.jpg?alt=media&token=7cf960bf-ac3d-4c35-b02f-3a4ef52149f8"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div class="col-xl-5" data-aos="fade-down">
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
            <p class="black_p" data-aos="fade-up">
              Our process may be data-driven, but our projects are fueled by
              something much stronger: passion. We don’t clock in at 9 and clock
              out at 5 - we work around the clock.
            </p>
            <div class="locla_text">
              <div class="row">
                <div class="col-xl-5" data-aos="fade-down">
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
                <div class="col-xl-7" data-aos="fade-up">
                  <div class="img_c">
                    <div
                      class="reveal-holder custom_aos"
                      data-aos="reveal-item"
                    >
                      <div
                        class="reveal-block right custom_aos"
                        data-aos="reveal-right"
                      ></div>
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/pic.jpg?alt=media&token=56ebdcb6-7ec5-4bb1-aedf-667afac01523"
                        className=""
                        alt=""
                      />
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
                    <div class="title-inner">
                      <div className="abt_we_icon">
                        <i class="ph-eye"></i>
                      </div>
                      <h3 class="txt-c">
                        FULL
                        <br /> TRANSPARENCY
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-6">
                  <div class="item_a">
                    <div class="title-inner">
                      <div className="abt_we_icon">
                        <i class="ph-trend-up"></i>
                      </div>
                      <h3 class="txt-c">REAL TIME PROJECT STATUS</h3>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-6">
                  <div class="item_a">
                    <div class="title-inner">
                      <div className="abt_we_icon">
                        <i class="ph-arrow-clockwise"></i>
                      </div>
                      <h3 class="txt-c">
                        AGILE
                        <br /> PROCESS
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-6">
                  <div class="item_a">
                    <div class="title-inner">
                      <div className="abt_we_icon">
                        <i class="ph-thumbs-up"></i>
                      </div>
                      <h3 class="txt-c">
                        TRUST <br />& RELIABILITY
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-6">
                  <div class="item_a">
                    <div class="title-inner">
                      <div className="abt_we_icon">
                        <i class="ph-user-circle"></i>
                      </div>
                      <h3 class="txt-c">HEAVY INVOLVEMENT FROM OUR CLIENTS</h3>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-6">
                  <div class="item_a">
                    <div class="title-inner">
                      <div className="abt_we_icon">
                        <i class="ph-handshake"></i>
                      </div>
                      <h3 class="txt-c">ONSITE COLLABORATION</h3>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-6">
                  <div class="item_a">
                    <div class="title-inner">
                      <div className="abt_we_icon">
                        <i class="ph-users-three"></i>
                      </div>
                      <h3 class="txt-c">
                        DEDICATED
                        <br /> TEAMS
                      </h3>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-6">
                  <div class="item_a">
                    <div class="title-inner">
                      <div className="abt_we_icon">
                        <i class="ph-lightbulb-filament"></i>
                      </div>
                      <h3 class="txt-c">INNOVATION & STRATEGY</h3>
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
                      dots={true}
                      slidesToShow={1}
                      slidesToScroll={1}
                      arrows={false}
                    >
                      <div className="single_project">
                        <h2>Bill Experts</h2>
                        <p>
                          We brought forward the finesse in design expertise,
                          worked with the client at each step and created a
                          visually stunning website that had high definition
                          images saying it all. Along with that we provided a
                          site structure that feels lovely while being
                          minimalist though also depicting all the information,
                          and contact point of the users.
                        </p>
                        <a href="" class="view_all">
                          View All
                        </a>
                      </div>
                      <div className="single_project">
                        <h2>Nadax Media</h2>
                        <p>
                          Crafted a WordPress website, wholesome in features and
                          capabilities, helping to put each and every aspect of
                          their service in a clear, concise and effective
                          layout. The end result was a fast, easy-to-navigate
                          and quick-response website.{" "}
                        </p>
                        <a href="" class="view_all">
                          View All
                        </a>
                      </div>
                      <div className="single_project">
                        <h2>Flightmantra</h2>
                        <p>
                          We knew how to combine the design and technological
                          aspect that delivers on the promise made to the
                          client. We used the best of the technological stack,
                          kept the right formulation for content and visual
                          depiction and produced a website that is fast to load,
                          provide easy information and have the users find all
                          they are looking for while being fully engaged.
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
                        <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/billexperts.jpg?alt=media&token=7f3d4a1c-ab2c-4d3d-80ae-69f94ee94bc9" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="img_slick">
                      <div class="overlay_img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/nadaxmedia.jpg?alt=media&token=43d93499-7b60-460c-ad8d-4f83d66fc10f" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div class="img_slick">
                      <div class="overlay_img">
                        <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/flightmantra.jpg?alt=media&token=834f5ae8-fe4f-4f3b-b684-04db84b4dd01" />
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
                <span>Meet our team</span>
              </h2>
            </div>
            <div class="right-block 1">
              <span
                class="img-overlay"
                style={{
                  backgroundImage:
                    "url(https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/1.jpg?alt=media&token=7cf960bf-ac3d-4c35-b02f-3a4ef52149f8)",
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
                backgroundImage:
                  "url(https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/2.jpg?alt=media&token=f4ee1cf2-c847-4f7a-b32a-a7431195774e)",
                backgroundSize: "cover",
              }}
            >
              <span></span>
            </span>
            <span
              class="img-overlay"
              style={{
                backgroundImage:
                  "url(https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/3.jpg?alt=media&token=b925203e-40ac-4858-adcf-e0f75123417f)",
                backgroundSize: "cover",
              }}
            >
              <span></span>
            </span>
            <span
              class="img-overlay"
              style={{
                backgroundImage:
                  "url(https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/4.jpg?alt=media&token=1ffe24c8-cd77-4b41-a51c-c183000fa16e)",
                backgroundSize: "cover",
              }}
            >
              <span></span>
            </span>
            <span
              class="img-overlay"
              style={{
                backgroundImage:
                  "url(https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/5.jpg?alt=media&token=9767dbb9-1be4-43d5-9e8f-3ea1a112f9d0)",
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
