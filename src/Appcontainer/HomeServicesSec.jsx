import React from "react";
import Typed from "react-typed";
import arrow from "../../src/img/arrow-design.svg";
import Slider from "react-slick";
import WheelReact from "wheel-react";

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
            <div className="col-lg-2"></div>
            <div className="col-lg-10">
              <div className="services_wrapper">
                <div className="services_inner">
                  <div id="list-example" class="services_title">
                    <a
                      class="list-group-item list-group-item-action"
                      href="#services1"
                    >
                      IT Services
                    </a>
                    <a
                      class="list-group-item list-group-item-action"
                      href="#services2"
                    >
                      BPO Services
                    </a>
                    <a
                      class="list-group-item list-group-item-action"
                      href="#services3"
                    >
                      Marketing Services
                    </a>
                    <a
                      class="list-group-item list-group-item-action"
                      href="#services4"
                    >
                      CAD Services
                    </a>
                  </div>
                  <div
                    data-spy="scroll"
                    data-target="#list-example"
                    data-offset="200"
                    class="scrollspy-example"
                  >
                    <div id="services1" className="services_spy_item">
                      <div className="services_item">
                        <h2>IT Services</h2>
                        <div className="services_change">
                          <div className="services_row">
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                          <div className="services_row">
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                          <div className="services_row">
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="services2" className="services_spy_item">
                      <div className="services_item">
                        <h2>BPO Services</h2>
                        <div className="services_change">
                          <div className="services_row">
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                          <div className="services_row">
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                          <div className="services_row">
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="services3" className="services_spy_item">
                      <div className="services_item">
                        <h2>Marketing Services</h2>
                        <div className="services_change">
                          <div className="services_row">
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                          <div className="services_row">
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                          <div className="services_row">
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="services4" className="services_spy_item">
                      <div className="services_item">
                        <h2>CAD Services</h2>
                        <div className="services_change">
                          <div className="services_row">
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                          <div className="services_row">
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                          </div>
                          <div className="services_row">
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
                              </p>
                              <a className="services_link" href="#">
                                <i class="ph-arrow-right"></i>
                              </a>
                            </div>
                            <div className="single_services">
                              <h4>Search engine Marketing</h4>
                              <p>
                                Put your image before clients who are now
                                effectively looking on oogle, Bing, YouTube, or
                                other earch...
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
      </section>
    </div>
  );
};
export default HomeServicesSec;
