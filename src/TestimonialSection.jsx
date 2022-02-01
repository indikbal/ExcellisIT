import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typed from "react-typed";

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
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae iure non reiciendis reprehenderit? Dicta eaque
                    illo ut beatae alias quod, distinctio ad, asperiores vitae
                    culpa qui nisi rerum debitis modi.
                  </p>
                  <div class="testim-box-content">
                    <h3>Mahmoud Mohamed</h3>
                    <p>FrontEnd Developer</p>
                  </div>
                </div>
              </div>
              <div class="testim-box">
                <div className="testin_box_inner">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae iure non reiciendis reprehenderit? Dicta eaque
                    illo ut beatae alias quod, distinctio ad, asperiores vitae
                    culpa qui nisi rerum debitis modi.
                  </p>
                  <div class="testim-box-content">
                    <h3>Mahmoud Mohamed</h3>
                    <p>FrontEnd Developer</p>
                  </div>
                </div>
              </div>
              <div class="testim-box">
                <div className="testin_box_inner">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae iure non reiciendis reprehenderit? Dicta eaque
                    illo ut beatae alias quod, distinctio ad, asperiores vitae
                    culpa qui nisi rerum debitis modi.
                  </p>
                  <div class="testim-box-content">
                    <h3>Mahmoud Mohamed</h3>
                    <p>FrontEnd Developer</p>
                  </div>
                </div>
              </div>
              <div class="testim-box">
                <div className="testin_box_inner">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae iure non reiciendis reprehenderit? Dicta eaque
                    illo ut beatae alias quod, distinctio ad, asperiores vitae
                    culpa qui nisi rerum debitis modi.
                  </p>
                  <div class="testim-box-content">
                    <h3>Mahmoud Mohamed</h3>
                    <p>FrontEnd Developer</p>
                  </div>
                </div>
              </div>
              <div class="testim-box">
                <div className="testin_box_inner">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae iure non reiciendis reprehenderit? Dicta eaque
                    illo ut beatae alias quod, distinctio ad, asperiores vitae
                    culpa qui nisi rerum debitis modi.
                  </p>
                  <div class="testim-box-content">
                    <h3>Mahmoud Mohamed</h3>
                    <p>FrontEnd Developer</p>
                  </div>
                </div>
              </div>
              <div class="testim-box">
                <div className="testin_box_inner">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae iure non reiciendis reprehenderit? Dicta eaque
                    illo ut beatae alias quod, distinctio ad, asperiores vitae
                    culpa qui nisi rerum debitis modi.
                  </p>
                  <div class="testim-box-content">
                    <h3>Mahmoud Mohamed</h3>
                    <p>FrontEnd Developer</p>
                  </div>
                </div>
              </div>
              <div class="testim-box">
                <div className="testin_box_inner">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae iure non reiciendis reprehenderit? Dicta eaque
                    illo ut beatae alias quod, distinctio ad, asperiores vitae
                    culpa qui nisi rerum debitis modi.
                  </p>
                  <div class="testim-box-content">
                    <h3>Mahmoud Mohamed</h3>
                    <p>FrontEnd Developer</p>
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
