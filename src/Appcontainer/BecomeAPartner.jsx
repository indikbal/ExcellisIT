import React from "react";
import "./assets/Style.css";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const BecomeAPartner = () => {
  return (
    <div>
      <section className="become_partner_sec">
        <div className="container-fluid pl-0">
          <div className="row">
            <div className="col-lg-7 col-md-8 pr-0">
              <div className="feature_item_box pl-170">
                <div className="section_typing">
                  <Typed strings={["Our Featured Services"]} typeSpeed={150} />
                </div>
                <div className="become_content">
                  <h4 data-aos="fade-up" data-aos-duration="500">
                    Need A Reliable IT partner?
                  </h4>
                  <h5 data-aos="fade-up" data-aos-duration="1000">
                    Here we are!
                  </h5>
                  <h6 data-aos="fade-up" data-aos-duration="1500">
                    COLLABORATE TODAY
                  </h6>
                  <p data-aos="fade-up" data-aos-duration="1500">
                    Excellis IT success is hardwired with its pursuit of sharing
                    the load for the long-term, here we believe in dividing your
                    load and collaborating with someone as amazing as you are
                    for a lifetime. Thus, here we share your load, dreams and
                    collaborate with you for landing support as well as the
                    success story.
                  </p>
                  <Link to="/PartnerWithus">
                    <button
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      className="explore_btn"
                    >
                      Explore More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="become_img_sec"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                className="img-fluid"
                src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/become-a-partner.jpg?alt=media&token=74f77dfc-d9ee-4e05-b5a3-47fec1c4acd7"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BecomeAPartner;
