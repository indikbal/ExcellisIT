import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InnerBannerContent from "./InnerBannerContent";

// function InnerBanner(props) {
//   return <h2>{props.content}</h2>;
// }

const InnerBanner = (props) => {
  return (
    <div>
      <section class="banner_img">
        <div class="container">
          <div class="about_text">
            <div class="text_about">
              <div className="innerbanner_element" data-aos="fade-right"></div>
              <div class="row">
                <div class="col-xl-12">
                  <h2>About Us</h2>
                </div>
                <div class="col-xl-9">
                  <p>
                    {" "}
                    “The people at Codal are what makes them really stand out.
                    They were responsive, attentive, flexible and they sought to
                    understand my business so they could plan ahead—beyond the
                    development project.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnerBanner;
