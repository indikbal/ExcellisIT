import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import InnerBanner from "../InnerBanner";
import { Helmet } from "react-helmet";
import ContactSection from "../Appcontainer/ContactSection";
const partnerwith =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/partnerWithus.jpg?alt=media&token=0951591c-12a5-4761-9bae-c35e02d7cb66";

const PartnerWithUs = ({ activeStatus }) => {
  const title = "Partner With Us";
  const description =
    "“The people at Codal are what makes them really stand out. They were responsive, attentive, flexible and they sought to understand my business so they could plan ahead—beyond the development project.”";

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Partner With Us</title>
        <meta name="description" content="aboutpage" />
        <meta name="keywords" content="about page" />
      </Helmet>
      <Navbar activeStatus="partner" />
      <InnerBanner title={title} description={description} />
      <div class="section partner_with_us">
        <div class="container">
          <div class="row">
            <div class="col-md-7">
              <div class="reveal-holder custom_aos" data-aos="reveal-item">
                <div
                  class="reveal-block right custom_aos"
                  data-aos="reveal-right"
                ></div>
                <img src={partnerwith} class="img-fluid" alt="" />
              </div>
            </div>
            <div class="col-md-5 align-items-center">
              <div class="partner_content_wrapper">
                <div
                  class="partners_title"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <h2>
                    Who partners with <span>Excellis</span>
                  </h2>
                </div>
                <div
                  class="details"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <p>
                    Excellis IT success is hardwired with its pursuit of sharing
                    the load for the long-term, here we believe in dividing your
                    load and collaborating with someone as amazing as you are
                    for a lifetime. Thus, here we share your load, dreams and
                    collaborate with you for landing support as well as the
                    success story.
                  </p>
                  <p>
                    Partnering with EXCELLIS IT helps in grabbing global
                    opportunities and development support in establishing your
                    brand. With our partnership you can leverage improved
                    customer relations, reduced operational costs, faster
                    conversion time, technical assistant, expanded global reach
                    within an incubating environment.
                  </p>
                  <a href="ContactUs" class="collaborate_button">
                    Collaborate Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="bpo_inner_how_it_works__section" id="why_partner">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="partner_withus_title text-center">
                <h5>Why Partner With Excellis</h5>
                <p>
                  The Excellis Partner Program is our way to achieve our mission
                  of spreading our Excellis culture across the globe.
                </p>
              </div>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-md-12">
              <div class="why_content">
                <div
                  class="row mt-5 mb-5"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  <div class="col-md-4">
                    <div
                      class="reveal-holder custom_aos"
                      data-aos="reveal-item"
                    >
                      <div
                        class="reveal-block right custom_aos"
                        data-aos="reveal-right"
                      ></div>

                      <div class="why_point">
                        <ul>
                          <li class="theme_color">
                            <i class="las la-check-square"></i>Leading IT
                            service provider
                          </li>
                          <li>
                            <i class="las la-check-square"></i>Regulatory
                            licenses
                          </li>
                          <li>
                            <i class="las la-check-square"></i>24x7 customer
                            support
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div
                      class="reveal-holder custom_aos"
                      data-aos="reveal-item"
                    >
                      <div
                        class="reveal-block right custom_aos"
                        data-aos="reveal-right"
                      ></div>
                      <div class="why_point">
                        <ul>
                          <li>
                            <i class="las la-check-square"></i>Low-cost project
                            completions
                          </li>
                          <li>
                            <i class="las la-check-square"></i>Flexible
                            Investments
                          </li>
                          <li>
                            <i class="las la-check-square"></i>Global payment
                            methods
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div
                      class="reveal-holder custom_aos"
                      data-aos="reveal-item"
                    >
                      <div
                        class="reveal-block right custom_aos"
                        data-aos="reveal-right"
                      ></div>
                      <div class="why_point">
                        <ul>
                          <li>
                            <i class="las la-check-square"></i>Digital marketing
                          </li>
                          <li>
                            <i class="las la-check-square"></i>Global Branding
                          </li>
                          <li>
                            <i class="las la-check-square"></i>3+ countries
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="how_its_work_precess">
            <div class="row">
              <div
                class="col-md-12 step_round_circle"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div class="bpo_inner__how_it_works_card">
                  <h2 class="card__number">01</h2>
                  <div class="card__title_wrapper">
                    <h5>Customer reachability</h5>
                    <p>
                      EXCELLIS IT believes that a relationship becomes strong
                      only with trust and openness. Staying accessible with
                      customer at each stage of their journey are the first
                      steps to building customer trust.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="col-md-12 d-flex justify-content-end step_round_circle"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <div class="bpo_inner__how_it_works_card">
                  <h2 class="card__number">02</h2>
                  <div class="card__title_wrapper">
                    <h5>BRINGS VALUE TO CUSTOMERS</h5>
                    <p>
                      EXCELLIS IT not only help customers remove the guesswork
                      from marketing activities, bring value to customers but
                      also aid in further improving the customer experience.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="col-md-12 step_round_circle "
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <div class="bpo_inner__how_it_works_card">
                  <h2 class="card__number">03</h2>
                  <div class="card__title_wrapper">
                    <h5>Low to no cost Investment</h5>
                    <p>
                      EXCELLIS IT is a firm believer of not entailing any
                      additional expense to execute. We are always in the favour
                      of low to no cost investment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default PartnerWithUs;
