import React from "react";
import "./assets/Style.css";
import Typed from "react-typed";
import Becomeimg from "../img/become-a-partner.jpg";

const BecomeAPartner = () => {
  return (
    <div>
      <section className="become_partner_sec">
        <div className="container-fluid pl-0">
          <div className="row">
            <div className="col-lg-8 pr-0">
              <div className="feature_item_box pl-170">
                <div className="section_typing">
                  <Typed strings={["Our Featured Services"]} typeSpeed={150} />
                </div>
                <div className="become_content">
                  <h4>Need A Reliable IT partner?</h4>
                  <h5>Here we are!</h5>
                  <h6>COLLABORATE TODAY</h6>
                  <p>
                    Excellis IT success is hardwired with its pursuit of sharing
                    the load for the long-term, here we believe in dividing your
                    load and collaborating with someone as amazing as you are
                    for a lifetime. Thus, here we share your load, dreams and
                    collaborate with you for landing support as well as the
                    success story.
                  </p>
                  <button className="explore_btn">Explore More</button>
                </div>
              </div>
            </div>
            <div className="become_img_sec">
              <img className="img-fluid" src={Becomeimg} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BecomeAPartner;
