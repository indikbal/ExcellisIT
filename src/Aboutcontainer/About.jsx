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

const About = ({ activeStatus }) => {
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
    "“EXCELLIS IT is one of the pioneers providing valued services which are capable of meeting industrial standards for various ventures. It is the perseverance and eagerness of our Mandarins which has made us one of the huge names in IT industry.”";
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us Page</title>
        <meta name="description" content="aboutpage" />
        <meta name="keywords" content="about page" />
      </Helmet>
      <Navbar activeStatus="about" />
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
                  Founded in the year 2010, EXCELLIS IT is operating with a
                  growing list of satisfied clients spanning 32+ countries
                  including India, UK, USA, Canada, Australia, Dubai, and entire
                  Europe.
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
                      EXCELLIS is a firm believer of great service climate which
                      leads to excellent service quality.
                    </h3>
                  </div>
                </div>
              </div>
              <div class="col-xl-4" data-aos="fade-up">
                <p>
                  Excellence is the Way of Life at Excellis. We are among the
                  best IT companies in India seeking to provide the best IT
                  solutions to our clients as well as make progress toward
                  continuous improvement. We face all the challenges that come
                  our way in the pursuit of excellence.
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
              Throughout this 10 years journey, we have been challenged by the
              evolution of technologies which we have overcome and reached here
              today. Now we know that we have both the spirit and the strength
              to go beyond our capabilities and serve our clients only the best.
            </p>
            <div class="locla_text">
              <div class="row">
                <div class="col-xl-5" data-aos="fade-down">
                  <p>
                    EXCELLIS IT is one of the leading service providers in the
                    field of Information Technology that has been instrumental
                    in catering tailored telemarketing outsourcing services
                    along with expertise in software development and website
                    designing, digital marketing and app development. Since its
                    commencement, EXCELLIS IT has gained the status of being the
                    best IT solutions company globally. Our wings are rapidly
                    growing while its roots are extending and diversifying from
                    off shores to complex IT solutions.
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
                <h2>
                  WE PAVE THE ROAD FOR COLOSAL POSSIBILITIES FOR YOUR BUSINESS
                </h2>
                <p>
                  Our mission is to enhance business growth of our customers
                  with creative design, development and deliver market defining,
                  high quality solutions that create value as well as reliable
                  competitive vantage to customers around the globe.
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
