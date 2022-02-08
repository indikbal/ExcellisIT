import React from "react";
import "./assets/Style.css";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const HomeFeatureServices = () => {
  return (
    <div>
      <section className="home_feature_sec">
        <div className="container-fluid pl-0">
          <div className="row">
            <div className="col-lg-7 col-md-8 pr-0">
              <div className="feature_item_box pl-170">
                <div className="section_typing">
                  <div class="reveal-holder custom_aos" data-aos="reveal-item">
                    <div
                      class="reveal-block right custom_aos"
                      data-aos="reveal-right"
                    ></div>
                    <Typed
                      strings={["Our Featured Services"]}
                      typeSpeed={150}
                    />
                  </div>
                </div>
                <div className="featured_services_list">
                  <li data-aos="fade-up" data-aos-duration="500">
                    IT Services
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1000">
                    BPO Services
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1000">
                    Marketing Services
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1500">
                    CAD Services
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home_abt_sec pl-170">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 pl-0">
              <div className="abt_wrapper">
                <div className="abt_inner">
                  <h4 data-aos="fade-up" data-aos-duration="500">
                    About Excellis
                  </h4>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    EXCELLIS IT is one of the leading service providers in the
                    field of Information Technology that has been instrumental
                    in catering tailored telemarketing outsourcing services
                    along with expertise in software development and website
                    designing, digital marketing and app development. Since its
                    commencement in the year 2010, EXCELLIS IT is operating with
                    a growing list of satisfied clients spanning 32+ countries
                    including India, UK, USA, Canada, Australia, Dubai, and
                    entire Europe.
                  </p>
                </div>
                <div className="abtn_read_more_btn">
                  <Link to="/about">
                    <button className="yellow_btn">Explore</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomeFeatureServices;
