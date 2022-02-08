import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import InnerBanner from "../InnerBanner";
import { Helmet } from "react-helmet";
import ContactSection from "../Appcontainer/ContactSection";
import { Link } from "react-router-dom";
import $ from "jquery";
const partnerwith =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/partnerWithus.jpg?alt=media&token=0951591c-12a5-4761-9bae-c35e02d7cb66";

const PartnerWithUs = ({ activeStatus }) => {
  const title = "Partner With Us";
  const description =
    "“A partnership for better tomorrow is based upon great values. Partnering with us will help you in establishing your brand in the global market as well as improve customer relations and reduce operational costs.”";

  const why1 =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/discover.jpg?alt=media&token=5ea9083d-d2c5-4c34-adb2-0bf26280e367";
  const why2 =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/strategize.jpg?alt=media&token=81e686fe-b64e-411f-b6e5-202b70514071";
  const why3 =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/design-process.jpg?alt=media&token=d19a5eda-c789-490d-ac1a-053b30296720";
  const why4 =
    "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/engineer-process.jpg?alt=media&token=d58c3957-fb40-4777-8f12-87f113cb0ba0";

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
                    the load for a long-term, here we believe in sharing your
                    load and collaborating with someone as amazing as you are.
                    Thus, here we share your load, dreams and collaborate with
                    you for landing support as well as the success story.
                  </p>
                  <p>
                    Partnering with EXCELLIS IT helps in grabbing global
                    opportunities and development support in establishing your
                    brand. With our partnership you can leverage improved
                    customer relations, reduced operational costs, faster
                    conversion time, technical assistant, expanded global reach
                    within an incubating environment.
                  </p>
                  <Link to="/ContactUs" class="collaborate_button">
                    Collaborate Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="why_partner_seection">
        <div className="container">
          <div className="row">
            <div className="why_partner_title">
              <h2>Why Partner with Excellis</h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div class="solutions-2-sing__sx pl-4">
                <span className="leftno">1</span>
                <div class="solutions-2-sing__circ">
                  <div class="solutions-2-sing__circ-int">
                    <div class="solutions-2-sing__circ1 rotating "></div>
                    <div class="solutions-2-sing__circ2 rotating2"></div>
                    <div class="solutions-2-sing__img ">
                      <div
                        style={{
                          backgroundImage: `url(${why1})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="partner_single_why">
                <h2>Business benefits</h2>
                <p>
                  EXCELLIS IT believes that a relationship becomes stronger with
                  trust and transparency. Thus, staying accessible to our
                  customers at each stage of their journey are the initial steps
                  to building customer trust. This also provides them various
                  business benefits like promotes growth, sustain support, saves
                  cost as well as built long term partnership.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="partner_single_why">
                <h2>Improve Customer Experience</h2>
                <p>
                  EXCELLIS IT helps their customers to get rid of their
                  guesswork from all of their marketing activities; in return
                  bringing value to customers as well as it further improves the
                  customer experience. We believe in giving the best experience
                  to our customers as for us each customer is our guest and we
                  are their host. Improved customer experience also builds brand
                  trust for customers.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div class="solutions-2-sing__sx pl-4">
                <span className="rightno">2</span>
                <div class="solutions-2-sing__circ">
                  <div class="solutions-2-sing__circ-int">
                    <div class="solutions-2-sing__circ1 rotating "></div>
                    <div class="solutions-2-sing__circ2 rotating2"></div>
                    <div class="solutions-2-sing__img ">
                      <div
                        style={{
                          backgroundImage: `url(${why2})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div class="solutions-2-sing__sx pl-4">
                <span className="leftno">3</span>
                <div class="solutions-2-sing__circ">
                  <div class="solutions-2-sing__circ-int">
                    <div class="solutions-2-sing__circ1 rotating "></div>
                    <div class="solutions-2-sing__circ2 rotating2"></div>
                    <div class="solutions-2-sing__img ">
                      <div
                        style={{
                          backgroundImage: `url(${why3})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="partner_single_why">
                <h2>Minimum Cost Investment</h2>
                <p>
                  EXCELLIS IT is a firm believer of not entailing any additional
                  expense to execute. We are always in the favour of low to no
                  cost investment. Partnering with us means you invest minimum
                  and get maximum benefits in return. We are one of the best IT
                  company in India providing you the best solutions and
                  experience in the sector.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="partner_single_why">
                <h2>Getting Maximum Support</h2>
                <p>
                  Partnership with EXCELLIS IT ensures that your associates get
                  introduced to newer avenues as well as develop their business
                  channels while gaining higher ROIs. Our partnership programs
                  are completely business centric thus, we endeavour to thrive
                  successfully and mutually along with our partners.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div class="solutions-2-sing__sx pl-4">
                <span className="rightno">4</span>
                <div class="solutions-2-sing__circ">
                  <div class="solutions-2-sing__circ-int">
                    <div class="solutions-2-sing__circ1 rotating "></div>
                    <div class="solutions-2-sing__circ2 rotating2"></div>
                    <div class="solutions-2-sing__img ">
                      <div
                        style={{
                          backgroundImage: `url(${why3})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      ></div>
                    </div>
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
