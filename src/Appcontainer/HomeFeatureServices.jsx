import React from "react";
import "./assets/Style.css";
import Typed from "react-typed";

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
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>
                <div className="abtn_read_more_btn">
                  <button className="yellow_btn">Explore</button>
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
