import React from "react";
import Typed from "react-typed";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

const HomeServicesSec = () => {
  return (
    <div>
      <section className="serices_section">
        <div className="arrow_div">
          <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/arrow-design.svg?alt=media&token=2d324c90-5008-4ac7-b74d-562cc8fd83e8" />
        </div>
        <div className="section_typing">
          <div class="reveal-holder custom_aos" data-aos="reveal-item">
            <div
              class="reveal-block right custom_aos"
              data-aos="reveal-right"
            ></div>
            <Typed strings={["Our Featured Services"]} typeSpeed={150} />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-xl-2"></div>
            <div className="col-lg-10 col-xl-10">
              <div className="services_wrapper">
                <div className="services_inner">
                  <div
                    class="nav flex-column nav-pills services_title_list"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                    data-aos="fade-up"
                    data-aos-duration="500"
                  >
                    <a
                      class="active"
                      id="v-pills-home-tab"
                      data-toggle="pill"
                      href="#v-pills-home"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <sup>01</sup>IT Services
                    </a>
                    <a
                      class=""
                      id="v-pills-profile-tab"
                      data-toggle="pill"
                      href="#v-pills-profile"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      <sup>02</sup>Marketing Services
                    </a>
                    <a
                      class=""
                      id="v-pills-messages-tab"
                      data-toggle="pill"
                      href="#v-pills-messages"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <sup>03</sup>BPO Services
                    </a>
                    <a
                      class=""
                      id="v-pills-settings-tab"
                      data-toggle="pill"
                      href="#v-pills-settings"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      <sup>04</sup> CAD Services
                    </a>
                  </div>
                  <div
                    class="tab-content"
                    id="pills-tabContent"
                    data-aos="fade-up"
                    data-aos-duration="500"
                  >
                    <div
                      class="tab-pane fade show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <div id="" className="">
                        <div className="services_item">
                          <h2>IT Services</h2>
                          <div className="services_change">
                            <div className="services_row">
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={100}
                              >
                                <div className="single_services">
                                  <Link to="/WebDevelopment" className="">
                                    <div className="services_icon development_icon"></div>

                                    <h4>Web Development</h4>
                                    <p>
                                      Put your image before clients who are now
                                      effectively looking on oogle, Bing,
                                      YouTube, or other earch...
                                    </p>
                                  </Link>
                                </div>
                              </Animated>
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={200}
                              >
                                <div className="single_services">
                                  <Link to="/UiUxDesign" className="">
                                    <div className="services_icon desigining_icon"></div>
                                    <h4>Web Designing</h4>
                                    <p>
                                      Put your image before clients who are now
                                      effectively looking on oogle, Bing,
                                      YouTube, or other earch...
                                    </p>
                                  </Link>
                                </div>
                              </Animated>
                            </div>
                            <div className="services_row">
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={300}
                              >
                                <Link to="/UiUxDesign" className="">
                                  <div className="single_services d-flex p-0">
                                    <div className="singel_img_serv">
                                      <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/ui-ux.jpg?alt=media&token=0aaee418-aa51-4409-8df8-95a013231316" />
                                    </div>
                                    <div className="single_img_services">
                                      <div className="services_icon desigining_icon"></div>
                                      <h4>UI/UX Design</h4>
                                      <p>
                                        Put your image before clients who are
                                        now effectively looking on oogle, Bing,
                                        YouTube, or other earch...
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </Animated>
                            </div>
                            <div className="services_row">
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={400}
                              >
                                <div className="single_services">
                                  <div className="services_icon desigining_icon"></div>
                                  <h4>Mobile Application</h4>
                                  <p>
                                    Put your image before clients who are now
                                    effectively looking on oogle, Bing, YouTube,
                                    or other earch...
                                  </p>
                                  <a className="services_link" href="#">
                                    <i class="ph-arrow-right"></i>
                                  </a>
                                </div>
                              </Animated>
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={500}
                              >
                                <div className="single_services">
                                  <div className="services_icon desigining_icon"></div>
                                  <h4>Software Development</h4>
                                  <p>
                                    Put your image before clients who are now
                                    effectively looking on oogle, Bing, YouTube,
                                    or other earch...
                                  </p>
                                  <a className="services_link" href="#">
                                    <i class="ph-arrow-right"></i>
                                  </a>
                                </div>
                              </Animated>
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={600}
                              >
                                <div className="single_services">
                                  <div className="services_icon desigining_icon"></div>
                                  <h4>QA & Testing</h4>
                                  <p>
                                    Put your image before clients who are now
                                    effectively looking on oogle, Bing, YouTube,
                                    or other earch...
                                  </p>
                                  <a className="services_link" href="#">
                                    <i class="ph-arrow-right"></i>
                                  </a>
                                </div>
                              </Animated>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <div id="" className="">
                        <div className="services_item">
                          <h2>Marketing Services</h2>
                          <div className="services_change">
                            <div className="services_row">
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={100}
                              >
                                <div className="single_services">
                                  <h4>Search engine Marketing</h4>
                                  <p>
                                    Put your image before clients who are now
                                    effectively looking on oogle, Bing, YouTube,
                                    or other earch...
                                  </p>
                                  <a className="services_link" href="#">
                                    <i class="ph-arrow-right"></i>
                                  </a>
                                </div>
                              </Animated>
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={200}
                              >
                                <div className="single_services">
                                  <h4>Social media marketing</h4>
                                  <p>
                                    Put your image before clients who are now
                                    effectively looking on oogle, Bing, YouTube,
                                    or other earch...
                                  </p>
                                  <a className="services_link" href="#">
                                    <i class="ph-arrow-right"></i>
                                  </a>
                                </div>
                              </Animated>
                            </div>
                            <div className="services_row">
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={300}
                              >
                                <div className="single_services d-flex p-0">
                                  <div className="singel_img_serv">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/ppc.jpg?alt=media&token=176ccc3e-2828-4054-a1c7-d3dc9bda6cee" />
                                  </div>
                                  <div className="single_img_services">
                                    <h4>Pay per click</h4>
                                    <p>
                                      Put your image before clients who are now
                                      effectively looking on oogle, Bing,
                                      YouTube, or other earch...
                                    </p>
                                    <a className="services_link" href="#">
                                      <i class="ph-arrow-right"></i>
                                    </a>
                                  </div>
                                </div>
                              </Animated>
                            </div>
                            <div className="services_row">
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={400}
                              >
                                <div className="single_services">
                                  <h4>Email marketing</h4>
                                  <p>
                                    Put your image before clients who are now
                                    effectively looking on oogle, Bing, YouTube,
                                    or other earch...
                                  </p>
                                  <a className="services_link" href="#">
                                    <i class="ph-arrow-right"></i>
                                  </a>
                                </div>
                              </Animated>
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={500}
                              >
                                <div className="single_services">
                                  <h4>Content marketing</h4>
                                  <p>
                                    Put your image before clients who are now
                                    effectively looking on oogle, Bing, YouTube,
                                    or other earch...
                                  </p>
                                  <a className="services_link" href="#">
                                    <i class="ph-arrow-right"></i>
                                  </a>
                                </div>
                              </Animated>
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={600}
                              >
                                <div className="single_services">
                                  <h4>Conversion rate optimisation</h4>
                                  <p>
                                    Put your image before clients who are now
                                    effectively looking on oogle, Bing, YouTube,
                                    or other earch...
                                  </p>
                                  <a className="services_link" href="#">
                                    <i class="ph-arrow-right"></i>
                                  </a>
                                </div>
                              </Animated>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      .
                      <div id="" className="">
                        <div className="services_item">
                          <h2>BPO Services</h2>
                          <div className="services_change">
                            <div className="services_row">
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={100}
                              >
                                <div className="single_services">
                                  <h4>Call Center Outsource</h4>
                                  <p>
                                    Put your image before clients who are now
                                    effectively looking on oogle, Bing, YouTube,
                                    or other earch...
                                  </p>
                                  <a className="services_link" href="#">
                                    <i class="ph-arrow-right"></i>
                                  </a>
                                </div>
                              </Animated>
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={200}
                              >
                                <div className="single_services">
                                  <h4>back-office process</h4>
                                  <p>
                                    Put your image before clients who are now
                                    effectively looking on oogle, Bing, YouTube,
                                    or other earch...
                                  </p>
                                  <a className="services_link" href="#">
                                    <i class="ph-arrow-right"></i>
                                  </a>
                                </div>
                              </Animated>
                            </div>

                            <div className="services_row">
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={300}
                              >
                                <div className="single_services d-flex p-0">
                                  <div className="singel_img_serv">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/ecommerce-outsourcing.jpg?alt=media&token=5f26ceb9-bad1-40ab-9b69-b1a9a8d9647d" />
                                  </div>
                                  <div className="single_img_services">
                                    <h4>E-commerce outsourcing</h4>
                                    <p>
                                      Put your image before clients who are now
                                      effectively looking on oogle, Bing,
                                      YouTube, or other earch...
                                    </p>
                                    <a className="services_link" href="#">
                                      <i class="ph-arrow-right"></i>
                                    </a>
                                  </div>
                                </div>
                              </Animated>
                            </div>
                            <div className="services_row">
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={400}
                              >
                                <div className="single_services">
                                  <h4>professional services</h4>
                                  <p>
                                    Put your image before clients who are now
                                    effectively looking on oogle, Bing, YouTube,
                                    or other earch...
                                  </p>
                                  <a className="services_link" href="#">
                                    <i class="ph-arrow-right"></i>
                                  </a>
                                </div>
                              </Animated>
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={500}
                              >
                                <div className="single_services">
                                  <h4>performance & compliance</h4>
                                  <p>
                                    Put your image before clients who are now
                                    effectively looking on oogle, Bing, YouTube,
                                    or other earch...
                                  </p>
                                  <a className="services_link" href="#">
                                    <i class="ph-arrow-right"></i>
                                  </a>
                                </div>
                              </Animated>
                              <Animated
                                animationIn="fadeInUp"
                                animationOut="fadeOut"
                                isVisible={true}
                                animationInDelay={600}
                              >
                                <div className="single_services">
                                  <h4>innovation at excellis</h4>
                                  <p>
                                    Put your image before clients who are now
                                    effectively looking on oogle, Bing, YouTube,
                                    or other earch...
                                  </p>
                                  <a className="services_link" href="#">
                                    <i class="ph-arrow-right"></i>
                                  </a>
                                </div>
                              </Animated>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                    >
                      <div id="" className="">
                        <div className="services_item">
                          <h2>CAD Services</h2>
                          <div className="services_change">
                            <Animated
                              animationIn="fadeInUp"
                              animationOut="fadeOut"
                              isVisible={true}
                              animationInDelay={100}
                            >
                              <div className="services_row">
                                <div className="single_services d-flex p-0">
                                  <div className="singel_img_serv">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/architechture.jpg?alt=media&token=fa2e35be-9234-47fb-8c47-ac13c3bad19d" />
                                  </div>
                                  <div className="single_img_services">
                                    <h4>ARCHITECTURE</h4>
                                    <p>
                                      EXCELLIS IT with a team of skilled
                                      architects has been offering a plethora of
                                      Architectural BIM services including
                                      conversion of design drawings to accurate
                                      construction documents and 3D models with
                                      parametric families.
                                    </p>
                                    <a className="services_link" href="#">
                                      <i class="ph-arrow-right"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </Animated>
                            <Animated
                              animationIn="fadeInUp"
                              animationOut="fadeOut"
                              isVisible={true}
                              animationInDelay={200}
                            >
                              <div className="services_row">
                                <div className="single_services d-flex p-0">
                                  <div className="singel_img_serv">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/mechanical.jpg?alt=media&token=298e7dde-8744-408f-9050-f112603cd8b6" />
                                  </div>
                                  <div className="single_img_services">
                                    <h4>MECHANICAL</h4>
                                    <p>
                                      The team of highly experienced Mechanical
                                      Modelers at EXCELLIS IT offers mechanical
                                      engineers, product designers & developers
                                      precise Mechanical 3D modeling services
                                      that are aimed at improving productivity
                                      and efficiency of the manufacturing
                                      process.
                                    </p>
                                    <a className="services_link" href="#">
                                      <i class="ph-arrow-right"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </Animated>
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
    </div>
  );
};
export default HomeServicesSec;
