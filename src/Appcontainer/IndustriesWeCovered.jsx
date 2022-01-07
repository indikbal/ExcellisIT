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
    slidesToShow: 3,
    asNavFor: ".slider-for",
    dots: false,
    focusOnSelect: false,
    arrows: true,
    autoplaySpeed: 4000,
    speed: 1000,
    infinite: true,
    pauseOnHover: true,
  });

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
                    <img src={industries2} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries3} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries2} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries1} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries2} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries3} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries2} className="img-fluid" />
                  </div>
                  <div className="industries_bg">
                    <img src={industries1} className="img-fluid" />
                  </div>
                </div>
                <div className="slider-nav">
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Travel & Tourism</h4>
                      <p>
                        As an experienced travel & hospitality software
                        development company, we always strives for developing
                        next-gen and powerful software and mobile applications.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Banking & Finance</h4>
                      <p>
                        Excellis IT is a prominent banking & financial software
                        development company that offers industry-leading
                        software, mobile applications, portals, and solutions
                        that are secure, fast, efficient, and easily scalable.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Real Estate & Property</h4>
                      <p>
                        while making real estate business more connected and
                        easily reachable for maximum engagement, our versatile
                        real estate developers offer businesses the most
                        invincible real estate software and applications for web
                        and smartphones.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Retail</h4>
                      <p>
                        Technology is the reason behind the catalytic growth of
                        the retail and eCommerce industry. And we, at Excellis
                        IT, design and develop web and mobile applications and
                        solutions that foster user engagement and efficiency to
                        boost business growth like never before.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Manufacturing</h4>
                      <p>
                        Excellis It provides wide range of Manufacturing IT
                        Services that combat your production challenges while
                        empowering your business to inspire innovation.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Energy</h4>
                      <p>
                        Excellis IT is a leading Hybrid IT solutions provider to
                        power your business systems.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Media & Enrtainment</h4>
                      <p>
                        Excellis IT provides reliability at scale for content
                        companies, build customer 360 platforms to offer
                        personalized services, implement media supply chains in
                        the cloud for agility and flexibility, and streamline
                        media operations.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Telecom</h4>
                      <p>
                        Excellis IT helps you with the most innovative and
                        efficient enterprise & business solutions that
                        streamline business processes and minimize challenges in
                        telecommunication market.
                      </p>
                    </div>
                  </div>
                  <div className="single_industries">
                    <div className="single_indus_content">
                      <h4>Food & Restaurant</h4>
                      <p>
                        Food and Beverages are not only a great part of our
                        lives but they are a huge part of online business as
                        well. For this mushrooming business, Excellis IT bring
                        the most innovative and impressively smart web and
                        mobile development solutions.
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
