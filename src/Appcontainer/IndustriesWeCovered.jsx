import React from "react";
import "./assets/Style.css";
import Typed from "react-typed";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import industries1 from "../../src/img/industries1.jpg";
import industries2 from "../../src/img/industries2.jpg";
import industries3 from "../../src/img/industries3.jpg";
import * as $ from "jquery";
import "slick-carousel";

const IndustriesWeCovered = () => {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 4,
    asNavFor: ".slider-for",
    dots: false,
    focusOnSelect: false,
    arrows: true,
    autoplaySpeed: 4000,
    speed: 2000,
    infinite: true,
    pauseOnHover: true,
    centerMode:false,
  });
  $(".slider").not('.slick-initialized').slick()

  // var slideTimer;
  // $('.slider-nav').on('mouseenter', '.slick-slide', function (e) {
  //     var $currTarget = $(e.currentTarget);
  //     $('.slider-nav .slick-slide').removeClass('slick-current');
  //     $currTarget.addClass('slick-current');

  //     slideTimer = setTimeout(function () {
  //         var index = $('.slider-nav').find('.slick-current').data('slick-index');
  //         var slickObj = $('.slider-for').slick('getSlick');
  //         slickObj.slickGoTo(index);
  //     }, 500);
  // }).on('mouseleave', '.slick-slide', function (e) {
  //     clearTimeout(slideTimer);
  // }); 



  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   navigation: true,
  //   speed: 2000,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   pauseOnHover: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

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
                <div className="slider-for">
                  <div className="industries_bg">
                    <img src={industries1} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries2}  className="img-fluid"  />
                  </div>
                  <div className="industries_bg">
                    <img src={industries3}  className="img-fluid"  />
                  </div>
                  <div className="industries_bg">
                    <img src={industries2}  className="img-fluid"  />
                  </div>
                  <div className="industries_bg">
                    <img src={industries1}  className="img-fluid"  />
                  </div>
                </div>
                <div className="slider-nav">
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
                  </div>
                </div>
              </div>

              {/* <div className="indus_slider_wrapper">
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
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default IndustriesWeCovered;
