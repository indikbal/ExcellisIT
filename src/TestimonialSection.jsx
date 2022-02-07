import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typed from "react-typed";
import { Scrollbars } from "react-custom-scrollbars-2";

const TestimonialSection = () => {
  var settingtestimonial = {
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div class="testim">
        <div className="section_typing">
          <Typed strings={["Many Love with our clients"]} typeSpeed={150} />
        </div>
        <div class="container">
          <div class="testim-content">
            <Slider
              fade={false}
              dots={true}
              slidesToShow={3}
              slidesToScroll={1}
              arrows={false}
              autoplay={true}
              centerMode={false}
              infinite={false}
              pauseOnHover={true}
              {...settingtestimonial}
            >
              <div class="testim-box">
                <div className="testin_box_inner">
                  <Scrollbars style={{ height: 200 }}>
                    <p>
                      The team at EXCELLIS IT worked quickly to get our website
                      online and provided a step-by-step guide to manage our
                      expectations. They were easily contactable and were fast
                      to make amendments ensuring our website was delivered on
                      time and budget. The EXCELLIS team also helped us by
                      providing valuable market insight to assist us in
                      marketing our online services to the public. I would not
                      hesitate to recommend EXCELLIS for anyone requiring
                      assistance with building and marketing a corporate
                      website.
                    </p>
                  </Scrollbars>
                  <div class="testim-box-content mt-3">
                    <h3>Shiv</h3>
                  </div>
                </div>
              </div>
              <div class="testim-box">
                <div className="testin_box_inner">
                  <Scrollbars style={{ height: 200 }}>
                    <p>
                      I have to thank you for your professional services in
                      making my website come true. You’re very detailed &
                      focused on making my site very informative & inspiring.
                      Thank you again, EXCELLIS.
                    </p>
                  </Scrollbars>
                  <div class="testim-box-content mt-3">
                    <h3>Carlos Garcia</h3>
                  </div>
                </div>
              </div>
              <div class="testim-box">
                <div className="testin_box_inner">
                  <Scrollbars style={{ height: 200 }}>
                    <p>
                      EXCELLIS, thank you for all you have done for me and my
                      business. You guys have been great to work with.
                    </p>
                  </Scrollbars>
                  <div class="testim-box-content mt-3">
                    <h3>Fearn</h3>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestimonialSection;
