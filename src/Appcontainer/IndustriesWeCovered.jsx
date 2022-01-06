import React from "react";
import "./assets/Style.css";
import Typed from "react-typed";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import industries1 from "../../src/img/industries1.jpg";
import industries2 from "../../src/img/industries2.jpg";

const IndustriesWeCovered = () => {
  var settings = {
    dots: false,
    infinite: true,
    navigation: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className="industries_slider_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pl-0 pr-0">
              <div className="section_typing">
                <Typed strings={["Our Featured Services"]} typeSpeed={150} />
              </div>
              <div className="indus_slider_wrapper">
                <Slider {...settings}>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Agriculture</h4>
                      <p>
                        Sports is a multibillion-dollar market and we know how
                        to help you to develop platforms like sports web and
                        mobile applications that can channelize revenue to your
                        side.
                      </p>
                    </div>
                    <img src={industries1} />
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Agriculture</h4>
                      <p>
                        Sports is a multibillion-dollar market and we know how
                        to help you to develop platforms like sports web and
                        mobile applications that can channelize revenue to your
                        side.
                      </p>
                    </div>
                    <img src={industries2} />
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Agriculture</h4>
                      <p>
                        Sports is a multibillion-dollar market and we know how
                        to help you to develop platforms like sports web and
                        mobile applications that can channelize revenue to your
                        side.
                      </p>
                    </div>
                    <img src={industries1} />
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Agriculture</h4>
                      <p>
                        Sports is a multibillion-dollar market and we know how
                        to help you to develop platforms like sports web and
                        mobile applications that can channelize revenue to your
                        side.
                      </p>
                    </div>
                    <img src={industries2} />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default IndustriesWeCovered;
