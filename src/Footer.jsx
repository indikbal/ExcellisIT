import React from "react";
import Footer_logo from "../src/img/footer_logo.png";
import Country from "../src/img/country.png";

const Footer = () => {
  return (
    <div>
      <section class="footer_sec">
        <footer id="section10" class="section footer">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-3">
                <div class="footer_ect_sec">
                  <ul>
                    <li>
                      <img class="footer_logo" src={Footer_logo} alt="" />
                    </li>
                    <li class="mt-3">
                      <p>
                        <b>Our clients in other countries:</b>
                      </p>
                      <img src={Country} class="img-fluid" />
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-4">
                    <h6>IT Services</h6>
                    <div class="footer-links footer_menu d-flex">
                      <ul>
                        <li>
                          <a href="https://www.excellisit.com/mobile-application">
                            <i class="las la-arrow-right"></i>Mobile Application
                          </a>
                        </li>
                        <li>
                          <a href="https://www.excellisit.com/software-development">
                            <i class="las la-arrow-right"></i>Software
                            Development
                          </a>
                        </li>
                        <li>
                          <a href="https://www.excellisit.com/ui-ux-design">
                            <i class="las la-arrow-right"></i>UI/UX Design
                          </a>
                        </li>
                        <li>
                          <a href="https://www.excellisit.com/web-development">
                            <i class="las la-arrow-right"></i>Web Development
                          </a>
                        </li>
                        <li>
                          <a href="https://www.excellisit.com/QA-testing">
                            <i class="las la-arrow-right"></i>QA and Testing
                          </a>
                        </li>
                        <li>
                          <a href="https://www.excellisit.com/CAD-drawing-services">
                            <i class="las la-arrow-right"></i>CAD Services
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <h6>BPO Services</h6>
                    <div class="footer-links footer_menu d-flex">
                      <ul>
                        <li>
                          <a href="https://www.excellisit.com/back-office-process-outsourcing-services">
                            <i class="las la-arrow-right"></i>Back office
                            process outsourcing
                          </a>
                        </li>
                        <li>
                          <a href="https://www.excellisit.com/call-center-outsourcing-service">
                            <i class="las la-arrow-right"></i>Call center
                            outsourcing{" "}
                          </a>
                        </li>
                        <li>
                          <a href="https://www.excellisit.com/ecommerce-outsourcing-services">
                            <i class="las la-arrow-right"></i>Ecommerce
                            outsourcing
                          </a>
                        </li>
                        <li>
                          <a href="https://www.excellisit.com/performance-compliance-management">
                            <i class="las la-arrow-right"></i>Performance &amp;
                            Compliance
                          </a>
                        </li>
                        <li>
                          <a href="https://www.excellisit.com/professional-services">
                            <i class="las la-arrow-right"></i>Profesional
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="https://www.excellisit.com/innovation-at-excellis">
                            <i class="las la-arrow-right"></i>Innovation at
                            EXCELLIS
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <h6>Marketing Services</h6>
                    <div class="footer-links footer_menu d-flex">
                      <ul>
                        <li>
                          <a href="https://www.excellisit.com/search-engine-marketing">
                            <i class="las la-arrow-right"></i>Search engine
                            Marketing
                          </a>
                        </li>
                        <li>
                          <a href="https://www.excellisit.com/social-media-marketing">
                            <i class="las la-arrow-right"></i>Social media
                            marketing
                          </a>
                        </li>
                        <li>
                          <a href="https://www.excellisit.com/ppc">
                            <i class="las la-arrow-right"></i>Pay per click
                          </a>
                        </li>
                        <li>
                          <a href="https://www.excellisit.com/email-marketing">
                            <i class="las la-arrow-right"></i>Email Marketing
                          </a>
                        </li>
                        <li>
                          <a href="https://www.excellisit.com/content-making">
                            <i class="las la-arrow-right"></i>Content Marketing
                          </a>
                        </li>
                        <li>
                          <a href="https://www.excellisit.com/google-my-business-optimization">
                            <i class="las la-arrow-right"></i>Google my business
                            optimization
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="row">
              <section class="trial-block w-100 shadow3" id="ContactUs">
                <div class="height450">
                  <div class="social-overlap process-scetion mt100">
                    <div class="container">
                      <div class="row justify-content-center">
                        <div class="col-md-12">
                          <div class="social-bar">
                            <div class="social-icons iconpad text-center">
                              <a
                                href="https://www.facebook.com/excellisIT/"
                                target="_blank"
                                class="slider-nav-item"
                              >
                                <i class="lab la-facebook-f"></i>
                              </a>
                              <a
                                href="https://www.linkedin.com/company/excellisit"
                                target="_blank"
                                class="slider-nav-item"
                              >
                                <i class="lab la-linkedin-in"></i>
                              </a>
                              <a
                                href="https://www.instagram.com/accounts/login/"
                                target="_blank"
                                class="slider-nav-item"
                              >
                                <i class="lab la-instagram"></i>
                              </a>
                              <a
                                href="https://twitter.com/excellisIT"
                                target="_blank"
                                class="slider-nav-item"
                              >
                                <i class="lab la-twitter"></i>
                              </a>
                              <a
                                href="https://www.excellisit.com/blog"
                                target="_blank"
                                class="slider-nav-item"
                              >
                                <i class="las la-rss"></i>
                              </a>
                              <a
                                href="https://www.youtube.com/channel/UCoz841ao5Se30KyCld9YmpA"
                                target="_blank"
                                class="slider-nav-item"
                              >
                                <i class="lab la-youtube"></i>
                              </a>
                              <a
                                href="https://join.skype.com/invite/UtNAdxIp1Dcs"
                                class="slider-nav-item"
                              >
                                <i class="lab la-skype"></i>
                              </a>
                              <a
                                href="https://wa.me/918617724646"
                                class="behance slider-nav-item"
                              >
                                <i class="lab la-whatsapp"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div> */}
          </div>
          <div class="copyright_sec">
            <div class="container">
              <div class="row">
                <div class="col-md-5">
                  <div class="copyright">
                    <p>© 2022 all rights reserved</p>
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="copyright_menu">
                    <ul>
                      <li>
                        <a href="https://www.excellisit.com/privacy-policy">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="https://www.excellisit.com/terms-and-condition">
                          Term and Condition
                        </a>
                      </li>
                      <li>
                        <a href="https://www.excellisit.com/about">
                          About Excellis
                        </a>
                      </li>
                      <li>
                        <a href="https://www.excellisit.com/blog">
                          Learning Center
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
