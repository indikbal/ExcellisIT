import React from "react";
import { Animated } from "react-animated-css";

const MainMenu = () => {
  return (
    <div>
      <nav class="menu">
        <div class="menu_wrapper">
          <Animated
            animationIn="fadeInRight"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={100}
          >
            <div class="menu__item menu__item--3">
              <div class="menu__item-inner">
                <div class="sidemenu">
                  <a
                    href="https://www.excellisit.com/mobile-application"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">Mobile Application</span>
                  </a>
                  <a
                    href="https://www.excellisit.com/software-development"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">
                      Software Development
                    </span>
                  </a>
                  <a
                    href="https://www.excellisit.com/ui-ux-design"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">UI/UX Design</span>
                  </a>
                  <a
                    href="https://www.excellisit.com/web-development"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">Web Development</span>
                  </a>
                  <a
                    href="https://www.excellisit.com/QA-testing"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">QA and Testing</span>
                  </a>
                </div>
                <p class="label label--topleft label--vert-mirror">
                  It Services
                </p>
              </div>
            </div>
          </Animated>
          <Animated
            animationIn="fadeInLeft"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={100}
          >
            <div class="menu__item menu__item--2">
              <div class="menu__item-inner">
                <div class="sidemenu">
                  <a
                    href="https://www.excellisit.com/back-office-process-outsourcing-services"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">
                      Back office process outsourcing
                    </span>
                  </a>
                  <a
                    href="https://www.excellisit.com/call-center-outsourcing-service"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">
                      Call center outsourcing{" "}
                    </span>
                  </a>
                  <a
                    href="https://www.excellisit.com/ecommerce-outsourcing-services"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">
                      Ecommerce outsourcing
                    </span>
                  </a>
                  <a
                    href="https://www.excellisit.com/performance-compliance-management"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">
                      Performance &amp; Compliance management
                    </span>
                  </a>
                  <a
                    href="https://www.excellisit.com/professional-services"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">
                      Profesional Services
                    </span>
                  </a>
                  <a
                    href="https://www.excellisit.com/innovation-at-excellis"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">
                      Innovation at EXCELLIS
                    </span>
                  </a>
                </div>
                <p class="label label--topleft label--vert-mirror">
                  Bpo Services
                </p>
              </div>
            </div>
          </Animated>

          <Animated
            animationIn="fadeInUp"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={100}
          >
            <div class="menu__item menu__item--1">
              <div class="menu__item-inner">
                <div class="mainmenu">
                  <a
                    href="https://www.excellisit.com/it-services"
                    class="mainmenu__item"
                  >
                    It Services
                  </a>
                  <a
                    href="https://www.excellisit.com/bpo"
                    class="mainmenu__item"
                  >
                    Bpo Services
                  </a>
                  <a
                    href="https://www.excellisit.com/digital-marketing"
                    class="mainmenu__item"
                  >
                    Marketing Services
                  </a>
                  <a
                    href="https://www.excellisit.com/CAD-drawing-services"
                    class="mainmenu__item"
                  >
                    Cad Services
                  </a>
                </div>
                <p class="label label--topleft label--vert-mirror">
                  Services We Offered
                </p>
                <div class="menu_address_sec d-flex align-items-center">
                  <div class="menu_mail_sec">
                    <h4>Quick Contact</h4>
                    <li>
                      <a href="mailto:info@excellisit.com">
                        <i class="las la-envelope-open-text"></i>{" "}
                        info@excellisit.com
                      </a>
                    </li>
                    <li>
                      <a href="mailto:sales@excellisit.com">
                        <i class="las la-envelope-open-text"></i>{" "}
                        sales@excellisit.com
                      </a>
                    </li>
                  </div>
                  <div class="menu_address">
                    <h4>Business Enquiry</h4>
                    <ul>
                      <li>
                        <a href="#">
                          <img src="https://www.excellisit.com/img/india.png" />
                          <i class="las la-phone-volume"></i>(+91) 861 772 4646{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="menu_certifi_img">
                  <img
                    src="https://www.excellisit.com/img/iso-nascom-msme.jpg"
                    class="img-fluid"
                  />
                </div>
                <div class="profile_download_link">
                  <a
                    href="https://www.excellisit.com/img/Excellis_profile.pdf"
                    target="_blank"
                  >
                    <i class="las la-download"></i> Company Profile
                  </a>
                </div>
                <div class="menu_social">
                  <a
                    href="https://www.facebook.com/excellisIT/"
                    target="_blank"
                  >
                    <i class="lab la-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/excellisit"
                    target="_blank"
                  >
                    <i class="lab la-linkedin-in"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/accounts/login/"
                    target="_blank"
                  >
                    <i class="lab la-instagram"></i>
                  </a>
                  <a href="https://twitter.com/excellisIT" target="_blank">
                    <i class="lab la-twitter"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCoz841ao5Se30KyCld9YmpA"
                    target="_blank"
                  >
                    <i class="lab la-youtube"></i>
                  </a>
                  <a href="https://join.skype.com/invite/UtNAdxIp1Dcs">
                    <i class="lab la-skype"></i>
                  </a>
                  <a href="https://wa.me/918617724646">
                    <i class="lab la-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </Animated>
          <Animated
            animationIn="fadeInRight"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={100}
          >
            <div class="menu__item menu__item--4">
              <div class="menu__item-inner">
                <div class="sidemenu">
                  <a
                    href="https://www.excellisit.com/about"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">About Us</span>
                  </a>
                  <a
                    href="https://www.excellisit.com/partner-with-us"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">Partner With Us</span>
                  </a>
                  <a
                    href="https://www.excellisit.com/portfolio"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">Our Portfolio</span>
                  </a>
                  <a
                    href="https://www.excellisit.com/career-opportunities"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">Career</span>
                  </a>
                  <a
                    href="https://www.excellisit.com/blog"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">Blog</span>
                  </a>
                  <a
                    href="https://www.excellisit.com/contactus"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">Contact Us</span>
                  </a>
                </div>
                <p class="label label--topleft label--vert-mirror">Company</p>
              </div>
            </div>
          </Animated>
          <Animated
            animationIn="fadeInLeft"
            animationOut="fadeOut"
            isVisible={true}
            animationInDelay={100}
          >
            <div class="menu__item menu__item--5">
              <div class="menu__item-inner">
                <div class="sidemenu">
                  <a
                    href="https://www.excellisit.com/search-engine-marketing"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">
                      Search engine Marketing
                    </span>
                  </a>
                  <a
                    href="https://www.excellisit.com/social-media-marketing"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">
                      Social media marketing
                    </span>
                  </a>
                  <a
                    href="https://www.excellisit.com/ppc"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">Pay per click</span>
                  </a>
                  <a
                    href="https://www.excellisit.com/email-marketing"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">Email Marketing</span>
                  </a>
                  <a
                    href="https://www.excellisit.com/content-making"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">Content Marketing</span>
                  </a>
                  <a
                    href="https://www.excellisit.com/google-my-business-optimization"
                    class="sidemenu__item"
                  >
                    <span class="sidemenu__item-inner">
                      Google my business optimization
                    </span>
                  </a>
                </div>
                <p class="label label--topleft label--vert-mirror">
                  Marketing Services
                </p>
              </div>
            </div>
          </Animated>
        </div>
      </nav>
    </div>
  );
};

export default MainMenu;