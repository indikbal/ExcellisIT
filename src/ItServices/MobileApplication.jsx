import React from "react";
import "./itservices.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import InnerBanner from "../InnerBanner";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import OurClients from "../Appcontainer/OurClients";
import OurBlogs from "../Appcontainer/OurBlog";
import TestimonialSection from "../TestimonialSection";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const bootstrap =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2FBootstrap.png?alt=media&token=c7d7a420-6618-480c-acb4-639820d666f9";
const java =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2FJava.png?alt=media&token=57226ce3-176b-491c-a540-1101d44c47cf";

const xd =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fadobe-xd.png?alt=media&token=7a378aeb-be0a-4e56-807b-b380b8053710";
const angular =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fangular.png?alt=media&token=415b1133-696c-4dbd-b53c-1c60138932dd";
const css3 =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fcss3.png?alt=media&token=1f3c28c2-2139-435c-8aa2-7f7db7c6f55c";
const figma =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Ffigma.png?alt=media&token=278ab062-d724-4fbe-acd3-b57cb8f854f5";
const flutter =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fflutter-logo.png?alt=media&token=415f19e2-4f74-48c1-a59c-53586030110d";
const mongodb =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fmongodb.png?alt=media&token=a6ee9efb-1a07-47c2-9d8a-5fd8ecf72734";
const oracle =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Foracel12c.png?alt=media&token=eb08f609-a2c3-4c63-a5bb-96fda1b25f91";
const react =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Freact.png?alt=media&token=f55b9fea-0645-402f-a18c-2cef8b6e4e68";
const swift =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fswift.png?alt=media&token=8bb91bf5-8689-4284-b618-02ff8eaf3b07";
const html =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fhtml-5.png?alt=media&token=41450ff8-8db6-41b9-a3af-1246352334e6";

const MobileApplication = () => {
  const title = "Mobile Application";
  const description =
    "“Are you looking for a reputable android app development company or hybrid app development company? Do not stress out; Excellis IT is the mobile app development agency you can hire fot to-of-the-line mobile app development services.”";

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mobile Application</title>
        <meta name="description" content="aboutpage" />
        <meta name="keywords" content="about page" />
      </Helmet>
      <Navbar />
      <InnerBanner title={title} description={description} />
      <section class="inner_page_first">
        <div class="s-BannerServices bg_dark">
          <div class="l-ContentColumn container">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="company_intro">
                  <h6 class="s-BannerServices__Subheader">
                    User-friendly websites
                  </h6>
                  <h1 class="BannerServices__Subheader h1--WithLine">
                    Mobile-first and user-friendly websites
                  </h1>
                  <p>
                    Thanks to Data Science you can effectively process data,{" "}
                    <strong>
                      base new services and business decisions on knowledge
                    </strong>{" "}
                    and improve your day-to-day operations.
                  </p>
                  <p>
                    You have the data and we will give you powerful solutions so
                    you can use it.{" "}
                    <strong>
                      Let’s work together and make the most of it.
                    </strong>
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="reveal-holder custom_aos" data-aos="reveal-item">
                  <div
                    class="reveal-block right custom_aos"
                    data-aos="reveal-right"
                  ></div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/mobile-application.jpg?alt=media&token=077572ec-50e3-4ee8-8476-461a6796c7ea"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="u-Scanlines"></div>
        </div>
        <div class="l-ContentColumn s-BannerServices__After">
          <div class="row justify-content-center">
            <div class=" col-md-12">
              <div class="u-BigCross"></div>
            </div>
          </div>
        </div>
      </section>
      <section class="fact_no">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 main_heading dark_text pr-3 pr-sm-5">
              <h6>Facts &amp; Numbers</h6>
              <div class="reveal-holder custom_aos" data-aos="reveal-item">
                <div
                  class="reveal-block right custom_aos"
                  data-aos="reveal-right"
                ></div>
                <h2 class="h2--WithLine">
                  Data <strong>transformed into knowledge</strong>
                </h2>
              </div>
              <p>
                We can design processes that
                <strong> visualise data processing,</strong> design and create a
                solution from scratch based on{" "}
                <strong>existing mathematical models</strong> and using
                components to connect them with each other.
              </p>
              <p>
                We will also work together with your domain experts and empower
                them with technology to support their analysis procedures and
                decision-making processes in your organisation.
              </p>
            </div>

            <div className="col-md-6">
              <div className="why_hire_us_sec">
                <div class="accordion" id="accordionExample">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapse1"
                          aria-expanded="true"
                          aria-controls="collapse1"
                        >
                          1. High-quality Output
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapse1"
                      class="collapse show"
                      aria-labelledby="heading1"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapse2"
                          aria-expanded="false"
                          aria-controls="collapse2"
                        >
                          2. Cost-Savings
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse2"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapse3"
                          aria-expanded="false"
                          aria-controls="collapse3"
                        >
                          3. Finding the best web designers in India is easy
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse3"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapse4"
                          aria-expanded="false"
                          aria-controls="collapse4"
                        >
                          4. Pay only for the hours you hire
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse4"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapse5"
                          aria-expanded="false"
                          aria-controls="collapse5"
                        >
                          5. A wide range of services
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapse5"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="u-Scanlines"></div>
      </section>

      <section class="common_cta_sec">
        <div class="container">
          <div class="s-CsCTA__Text text-center common_cta_inner">
            <h2 class="u-Center h2--WideTitle">
              Transform your data into valuable business insights
            </h2>
            <div class="u-Center white_text">
              <p>
                We will also work together with your domain experts and empower
                them with technology to support their analysis procedures and
                decision-making processes in your organisation.
              </p>
            </div>
            <NavLink to="/contactUs" className="dark-btn2">
              <span>Contact us</span>
              <i class="ph-arrow-right"></i>
            </NavLink>
          </div>
        </div>
      </section>

      <section className="expertise_section">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-12">
              <div class="main_heading white_text">
                <h6>Expertise</h6>
                <div class="reveal-holder custom_aos" data-aos="reveal-item">
                  <div
                    class="reveal-block right custom_aos"
                    data-aos="reveal-right"
                  ></div>
                  <h2 class="h2--WithLine">Our Expertise</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="single_expertise text-center">
                <div className="expertise_icon_single">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/computer.png?alt=media&token=5fe96fea-028d-4578-950f-0b1f8b222932"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <h4>Custom Website Design</h4>
                <Scrollbars
                  style={{ height: 100 }}
                  className="expertise_single_cont"
                >
                  <p>
                    A custom Website Design India will look professional to any
                    visitors to your website, leading to more conversions,
                    making your business look more legitimate and credible. The
                    credibility of a professional site can alleviate concerns
                    customer may have about security, in particular if you are
                    selling products from your site. A custom Website Design
                    gives you an upper hand by catering more towards your
                    audience and demographic. With a custom website design, you
                    have the flexibility to customize the functionality and make
                    changes to the sites as your business deems necessary.
                  </p>
                </Scrollbars>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single_expertise text-center">
                <div className="expertise_icon_single">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/computer.png?alt=media&token=5fe96fea-028d-4578-950f-0b1f8b222932"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <h4>Custom Website Design</h4>
                <Scrollbars
                  style={{ height: 100 }}
                  className="expertise_single_cont"
                >
                  <p>
                    A custom Website Design India will look professional to any
                    visitors to your website, leading to more conversions,
                    making your business look more legitimate and credible. The
                    credibility of a professional site can alleviate concerns
                    customer may have about security, in particular if you are
                    selling products from your site. A custom Website Design
                    gives you an upper hand by catering more towards your
                    audience and demographic. With a custom website design, you
                    have the flexibility to customize the functionality and make
                    changes to the sites as your business deems necessary.
                  </p>
                </Scrollbars>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single_expertise text-center">
                <div className="expertise_icon_single">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/computer.png?alt=media&token=5fe96fea-028d-4578-950f-0b1f8b222932"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <h4>Custom Website Design</h4>
                <Scrollbars
                  style={{ height: 100 }}
                  className="expertise_single_cont"
                >
                  <p>
                    A custom Website Design India will look professional to any
                    visitors to your website, leading to more conversions,
                    making your business look more legitimate and credible. The
                    credibility of a professional site can alleviate concerns
                    customer may have about security, in particular if you are
                    selling products from your site. A custom Website Design
                    gives you an upper hand by catering more towards your
                    audience and demographic. With a custom website design, you
                    have the flexibility to customize the functionality and make
                    changes to the sites as your business deems necessary.
                  </p>
                </Scrollbars>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single_expertise text-center">
                <div className="expertise_icon_single">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/computer.png?alt=media&token=5fe96fea-028d-4578-950f-0b1f8b222932"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <h4>Custom Website Design</h4>
                <Scrollbars
                  style={{ height: 100 }}
                  className="expertise_single_cont"
                >
                  <p>
                    A custom Website Design India will look professional to any
                    visitors to your website, leading to more conversions,
                    making your business look more legitimate and credible. The
                    credibility of a professional site can alleviate concerns
                    customer may have about security, in particular if you are
                    selling products from your site. A custom Website Design
                    gives you an upper hand by catering more towards your
                    audience and demographic. With a custom website design, you
                    have the flexibility to customize the functionality and make
                    changes to the sites as your business deems necessary.
                  </p>
                </Scrollbars>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single_expertise text-center">
                <div className="expertise_icon_single">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/computer.png?alt=media&token=5fe96fea-028d-4578-950f-0b1f8b222932"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <h4>Custom Website Design</h4>
                <Scrollbars
                  style={{ height: 100 }}
                  className="expertise_single_cont"
                >
                  <p>
                    A custom Website Design India will look professional to any
                    visitors to your website, leading to more conversions,
                    making your business look more legitimate and credible. The
                    credibility of a professional site can alleviate concerns
                    customer may have about security, in particular if you are
                    selling products from your site. A custom Website Design
                    gives you an upper hand by catering more towards your
                    audience and demographic. With a custom website design, you
                    have the flexibility to customize the functionality and make
                    changes to the sites as your business deems necessary.
                  </p>
                </Scrollbars>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single_expertise text-center">
                <div className="expertise_icon_single">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/computer.png?alt=media&token=5fe96fea-028d-4578-950f-0b1f8b222932"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <h4>Custom Website Design</h4>
                <Scrollbars
                  style={{ height: 100 }}
                  className="expertise_single_cont"
                >
                  <p>
                    A custom Website Design India will look professional to any
                    visitors to your website, leading to more conversions,
                    making your business look more legitimate and credible. The
                    credibility of a professional site can alleviate concerns
                    customer may have about security, in particular if you are
                    selling products from your site. A custom Website Design
                    gives you an upper hand by catering more towards your
                    audience and demographic. With a custom website design, you
                    have the flexibility to customize the functionality and make
                    changes to the sites as your business deems necessary.
                  </p>
                </Scrollbars>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="inner_page_industries">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-12">
              <div class="main_heading white_text">
                <h6>Industries</h6>
                <div class="reveal-holder custom_aos" data-aos="reveal-item">
                  <div
                    class="reveal-block right custom_aos"
                    data-aos="reveal-right"
                  ></div>
                  <h2 class="h2--WithLine">Industries WE served</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="inner_industries_inner">
                <Swiper
                  modules={[Navigation]}
                  slidesPerView={4}
                  spaceBetween={0}
                  navigation
                  autoplay={{ delay: 3000 }}
                  className="mySwiper"
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
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Fagriculture.jpg?alt=media&token=7bd6589c-bc10-41ca-8118-72b04ba4eaed"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Agriculture</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Fbanking.jpg?alt=media&token=31617527-b57e-4d92-9540-ad5a03a4b2f7"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Banking</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Fecommerce.jpg?alt=media&token=432f7c80-2e48-4776-b397-75e58aaca633"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>E-commerce</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Feducation.jpg?alt=media&token=50c74e90-077f-4bb8-9800-f47d2e939a8e"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Education</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Fenergy.jpg?alt=media&token=d6e9327d-cf5a-4bad-8922-146d0316fafc"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Energy</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Ffood-resturent.jpg?alt=media&token=27c9bfa9-e3fa-4d04-b8ac-3bda56b6926d"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Food & Resrurent</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Flogistics.jpg?alt=media&token=8f039e42-a3cb-46e6-83c2-3d4835908c62"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Logistic</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Fmanufacture.jpg?alt=media&token=fdfca7c2-a9cb-4493-ba34-7e1936216675"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4> Manufacture</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Fmedia-entertainment.jpg?alt=media&token=19ea18ed-c6e1-4027-b40b-77f1af783358"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Media & Entertainment</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Freal-state.jpg?alt=media&token=32d06a45-6318-49b9-936c-4e817aaabf88"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Real State</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Fretail.jpg?alt=media&token=3d936774-05a1-4442-b72b-cd7f8b230030"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Retail</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Fsocial-network.jpg?alt=media&token=264215f6-fd0f-4a89-9d14-8d499ba255a8"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Social Networks</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Fsports-gaming.jpg?alt=media&token=f070189a-a11b-4e8e-8d71-a1c6ee80cd12"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Sports & Gaming</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Ftelecom.jpg?alt=media&token=f849fc3e-ff94-4aed-8b32-8f272be76ae9"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Telecome</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="inner_single_industries">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/industries%2Ftour.jpg?alt=media&token=24ef4900-5db4-44cd-a440-04d01cf5c797"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="inner_single_industries_cont">
                        <h4>Tour & Travel</h4>
                        <p>
                          A custom Website Design India will look professional
                          to any visitors to your website, leading to more
                          conversions
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurClients />

      <TestimonialSection />

      <section className="cta2_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cta2_inner d-block d-sm-flex align-items-center">
                <div className="cta2_img_sec">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/get_in_touch.jpg?alt=media&token=ee75d316-dacb-4289-ad29-58397cd83b83"
                    alt=""
                  />
                </div>
                <div className="cta2_content_sec text-left">
                  <h4>Transform your data into valuable business insights</h4>
                  <p>
                    We can design processes that visualise data processing,
                    design and create a solution from scratch based on existing
                    mathematical
                  </p>
                  <a href="#" className="light-btn">
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="common_faq_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="faq_title">
                <h4>
                  Frequently
                  <br /> Asked Questions
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="faq_inner">
                <div class="accordion" id="faqaccordian">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq1"
                          aria-expanded="true"
                          aria-controls="faq1"
                        >
                          <span>1.</span> High-quality Output
                        </button>
                      </h5>
                    </div>

                    <div
                      id="faq1"
                      class="collapse show"
                      aria-labelledby="heading1"
                      data-parent="#faqaccordian"
                    >
                      <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingTwo">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq2"
                          aria-expanded="false"
                          aria-controls="faq1"
                        >
                          <span>2.</span> Cost-Savings
                        </button>
                      </h5>
                    </div>
                    <div
                      id="faq1"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#faqaccordian"
                    >
                      <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq3"
                          aria-expanded="false"
                          aria-controls="faq3"
                        >
                          <span>3.</span> Finding the best web designers in
                          India is easy
                        </button>
                      </h5>
                    </div>
                    <div
                      id="faq3"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#faqaccordian"
                    >
                      <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq4"
                          aria-expanded="false"
                          aria-controls="faq4"
                        >
                          <span>4.</span> Pay only for the hours you hire
                        </button>
                      </h5>
                    </div>
                    <div
                      id="faq4"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#faqaccordian"
                    >
                      <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header" id="headingThree">
                      <h5 class="mb-0">
                        <button
                          class="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#faq5"
                          aria-expanded="false"
                          aria-controls="faq5"
                        >
                          <span>5.</span>A wide range of services
                        </button>
                      </h5>
                    </div>
                    <div
                      id="faq5"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#faqaccordian"
                    >
                      <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurBlogs />

      <section class="sec section_technology">
        <div class="s-TechnologiesLogos s-TechnologiesLogos--WithScanlines ">
          <div class="container">
            <div class="main_heading dark_text">
              <h6 class="s-TechnologiesLogos__Subtitle">
                Technologies &amp; Tools
              </h6>

              <h2 class="h2 h2--WithLine">
                Our solutions are based <br />
                <strong>on the following technologies</strong>
              </h2>
            </div>
            <div class="s-TechnologiesLogos__GridWrapper">
              <div class="row">
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-up">
                    <div class="s-TechnologiesLogos__Image">
                      <img data-lazyloaded="1" src={react} alt="react logo" />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-down">
                    <div class="s-TechnologiesLogos__Image">
                      <img
                        data-lazyloaded="1"
                        src={angular}
                        alt="angular logo"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-up">
                    <div class="s-TechnologiesLogos__Image">
                      <img
                        data-lazyloaded="1"
                        src={mongodb}
                        alt=" mongodb logo"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-down">
                    <div class="s-TechnologiesLogos__Image">
                      <img
                        data-lazyloaded="1"
                        src={bootstrap}
                        alt=" bootstrap loog"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-up">
                    <div class="s-TechnologiesLogos__Image">
                      <img
                        data-lazyloaded="1"
                        src={flutter}
                        alt=" flutter logo"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-down">
                    <div class="s-TechnologiesLogos__Image">
                      <img data-lazyloaded="1" src={xd} alt="xd logo" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-up">
                    <div class="s-TechnologiesLogos__Image">
                      <img
                        data-lazyloaded="1"
                        src={oracle}
                        alt=" oracle logo"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-down">
                    <div class="s-TechnologiesLogos__Image">
                      <img data-lazyloaded="1" src={html} alt=" html logo" />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-up">
                    <div class="s-TechnologiesLogos__Image">
                      <img data-lazyloaded="1" src={java} alt="java logo" />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-down">
                    <div class="s-TechnologiesLogos__Image">
                      <img data-lazyloaded="1" src={swift} alt="swift logo" />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-down">
                    <div class="s-TechnologiesLogos__Image">
                      <img data-lazyloaded="1" src={css3} alt="css3 logo" />
                    </div>
                  </div>
                </div>
                <div class="col-md-2 col-4 col">
                  <div class="s-TechnologiesLogos__Inner" data-aos="fade-up">
                    <div class="s-TechnologiesLogos__Image">
                      <img data-lazyloaded="1" src={figma} alt="figma logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="u-Scanlines"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MobileApplication;
