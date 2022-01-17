import React, { useState, useEffect } from "react";
import ThreeScene from "../Appcontainer/ThreeScene";
import Navbar from "../Navbar";
import "../Servicescontainer/services.css";
import itimg from "../../src/img/web-mobile.png";
import marketingimg from "../../src/img/digital-marketing.png";
import bpoimg from "../../src/img/bpo-img.png";
import cadimg from "../../src/img/cadimg.png";
import { Animated } from "react-animated-css";

const MainServices = () => {
  return (
    <div>
      <Navbar />

      <section className="main_servics_sec">
        <ThreeScene />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="main_services_inner">
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-services"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <Animated
                      animationIn="fadeInUp"
                      animationOut="fadeOut"
                      isVisible={true}
                      animationInDelay={100}
                    >
                      <div className="main_services_content">
                        <div className="main_services_content_inner">
                          <h4>OUR SOLUTIONS</h4>
                          <p>
                            “Let experts handle your back-office processes so
                            you can focus on what you do best. Rather than get
                            caught up in processes and workflows that are
                            slowing your office down, turn to EXCELLIS IT, a BPO
                            management company to help you overcome the
                            obstacles you face.”
                          </p>
                        </div>
                      </div>
                    </Animated>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-it"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <Animated
                      animationIn="fadeInUp"
                      animationOut="fadeOut"
                      isVisible={true}
                      animationInDelay={100}
                    >
                      <div className="it_services_nav_sec">
                        <div className="it_services_title">
                          <h4>IT Services</h4>
                        </div>
                        <div className="it_servies_list_item">
                          <ul>
                            <li>
                              <a href="#">Mobile Application</a>
                            </li>
                            <li>
                              <a href="#">Software Development</a>
                            </li>
                            <li>
                              <a href="#">UI / UX Design</a>
                            </li>
                            <li>
                              <a href="#">Web Developemnt</a>
                            </li>
                            <li>
                              <a href="#">QA & Testing</a>
                            </li>
                            <li>
                              <a href="#"></a>
                            </li>
                          </ul>
                        </div>
                        <div className="services_graphics_nav_sec">
                          <img className="img-fluid" src={itimg} />
                        </div>
                      </div>
                    </Animated>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-marketing"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <Animated
                      animationIn="fadeInUp"
                      animationOut="fadeOut"
                      isVisible={true}
                      animationInDelay={100}
                    >
                      <div className="it_services_nav_sec">
                        <div className="it_services_title">
                          <h4>Marketing Services</h4>
                        </div>
                        <div className="it_servies_list_item">
                          <ul>
                            <li>
                              <a href="#">Search engine Marketing</a>
                            </li>
                            <li>
                              <a href="#">Social media marketing</a>
                            </li>
                            <li>
                              <a href="#">Pay per click</a>
                            </li>
                            <li>
                              <a href="#">Email Marketing</a>
                            </li>
                            <li>
                              <a href="#">Content Marketing</a>
                            </li>
                            <li>
                              <a href="#">Google my business optimization</a>
                            </li>
                          </ul>
                        </div>
                        <div className="services_graphics_nav_sec">
                          <img className="img-fluid" src={marketingimg} />
                        </div>
                      </div>
                    </Animated>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-bpo"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <Animated
                      animationIn="fadeInUp"
                      animationOut="fadeOut"
                      isVisible={true}
                      animationInDelay={100}
                    >
                      <div className="it_services_nav_sec">
                        <div className="it_services_title">
                          <h4>BPO Services</h4>
                        </div>
                        <div className="it_servies_list_item">
                          <ul>
                            <li>
                              <a href="#">Back office process outsourcing</a>
                            </li>
                            <li>
                              <a href="#">Call center outsourcing</a>
                            </li>
                            <li>
                              <a href="#">Ecommerce outsourcing</a>
                            </li>
                            <li>
                              <a href="#">
                                Performance & Compliance management
                              </a>
                            </li>
                            <li>
                              <a href="#">Profesional Services</a>
                            </li>
                            <li>
                              <a href="#">Innovation at EXCELLIS</a>
                            </li>
                          </ul>
                        </div>
                        <div className="services_graphics_nav_sec">
                          <img className="img-fluid" src={bpoimg} />
                        </div>
                      </div>
                    </Animated>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-cad"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <Animated
                      animationIn="fadeInUp"
                      animationOut="fadeOut"
                      isVisible={true}
                      animationInDelay={100}
                    >
                      <div className="it_services_nav_sec">
                        <div className="it_services_title">
                          <h4>CAD Services</h4>
                        </div>
                        <div className="it_servies_list_item">
                          <ul>
                            <li>
                              <a href="#">Architecture</a>
                            </li>
                            <li>
                              <a href="#">Mechanical</a>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>
                        <div className="services_graphics_nav_sec">
                          <img className="img-fluid" src={cadimg} />
                        </div>
                      </div>
                    </Animated>
                  </div>
                </div>
                <ul class="nav nav-pills mb-0" id="pills-tab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active services_title_link"
                      id="pills-home-tab"
                      data-toggle="pill"
                      href="#pills-services"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Our Services
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="pills-profile-tab"
                      data-toggle="pill"
                      href="#pills-it"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      IT Services <i class="ph-plus"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="pills-contact-tab"
                      data-toggle="pill"
                      href="#pills-marketing"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Marketing Services <i class="ph-plus"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="pills-contact-tab"
                      data-toggle="pill"
                      href="#pills-bpo"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      BPO Services <i class="ph-plus"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="pills-contact-tab"
                      data-toggle="pill"
                      href="#pills-cad"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      CAD Services <i class="ph-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default MainServices;
