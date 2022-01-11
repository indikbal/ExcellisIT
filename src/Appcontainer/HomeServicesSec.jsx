import React from "react";
import Typed from "react-typed";
import arrow from "../../src/img/arrow-design.svg";
import single_serv from "../../src/img/industries1.jpg";
import servicesicon from "../../src/img/servicesicon.png";
import { Animated } from "react-animated-css";

const HomeServicesSec = () => {
  return (
    <div>
      <section className="serices_section">
        <div className="arrow_div">
          <img src={arrow} />
        </div>
        <div className="section_typing">
          <Typed strings={["Our Featured Services"]} typeSpeed={150} />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-xl-3"></div>
            <div className="col-lg-10 col-xl-9">
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
                      IT Services
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
                      Marketing Services
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
                      BPO Services
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
                      CAD Services
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
                                  <div className="services_icon development_icon"></div>
                                  <h4>Web Development</h4>
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
                                  <div className="services_icon desigining_icon"></div>
                                  <h4>Web Designing</h4>
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
                                    <img src={single_serv} />
                                  </div>
                                  <div className="single_img_services">
                                    <div className="services_icon desigining_icon"></div>
                                    <h4>UI/UX Design</h4>
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
                                    <img src={single_serv} />
                                  </div>
                                  <div className="single_img_services">
                                    <h4>Search engine Marketing</h4>
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
                                animationInDelay={500}
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
                                animationInDelay={600}
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
                                    <img src={single_serv} />
                                  </div>
                                  <div className="single_img_services">
                                    <h4>Search engine Marketing</h4>
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
                                animationInDelay={500}
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
                                animationInDelay={600}
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
                            <div className="services_row">
                              <div className="single_services d-flex p-0">
                                <div className="singel_img_serv">
                                  <img src={single_serv} />
                                </div>
                                <div className="single_img_services">
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
                              </div>
                            </div>
                            <div className="services_row">
                              <div className="single_services d-flex p-0">
                                <div className="singel_img_serv">
                                  <img src={single_serv} />
                                </div>
                                <div className="single_img_services">
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
        </div>
      </section>
    </div>
  );
};
export default HomeServicesSec;
