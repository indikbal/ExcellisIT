import React from "react";
import Typed from "react-typed";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurClients = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 3,
    slidesToScroll: -3,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
  };
  const settings3 = {
    dots: false,
    infinite: true,
    speed: 8000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
    prevArrow: false,
    nextArrow: false,
  };
  return (
    <div>
      <section className="our_clients_sec">
        <div className="section_typing">
          <Typed strings={["Our Worldwide CLients"]} typeSpeed={150} />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="our_client_text_area">
                <h4>Clients Benefit from 6 yers of our Experience</h4>
                <p>
                  Being a well-known web solutions company, it is undeniable
                  fact that what we are today is because of the love,
                  appreciation, and constant iteration brought in us by our
                  cherished extended family- our clients.
                </p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="client_logo_slider_wrapper">
                <div className="slider_row mb-3">
                  <Slider {...settings}>
                    <div className="client_logo_wrapper">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/client1.jpg?alt=media&token=b32ba5e7-8576-4fc9-9f5d-0df05ebee4b4"
                        className="img-fluid"
                      />
                    </div>
                    <div className="client_logo_wrapper">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/client2.jpg?alt=media&token=cd6bb4bf-5224-496e-880c-dda3b7c049ce"
                        className="img-fluid"
                      />
                    </div>
                    <div className="client_logo_wrapper">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/client3.jpg?alt=media&token=8a258126-c42b-4f37-a6c4-6513ad1326cf"
                        className="img-fluid"
                      />
                    </div>
                    <div className="client_logo_wrapper">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/client4.jpg?alt=media&token=2617d480-c827-490d-8f63-f7f02247ca98"
                        className="img-fluid"
                      />
                    </div>
                  </Slider>
                </div>
                <div className="slider_row mb-3">
                  <Slider {...settings2}>
                    <div className="client_logo_wrapper">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/client5.jpg?alt=media&token=1c840d85-09f0-464f-a082-3863ff8d83d3"
                        className="img-fluid"
                      />
                    </div>
                    <div className="client_logo_wrapper">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/client6.jpg?alt=media&token=49f9c851-480f-4e38-9cd6-70d03fd365ef"
                        className="img-fluid"
                      />
                    </div>
                    <div className="client_logo_wrapper">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/client7.jpg?alt=media&token=f1d849f4-e003-4da0-9021-ecad123a5690"
                        className="img-fluid"
                      />
                    </div>
                    <div className="client_logo_wrapper">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/client8.jpg?alt=media&token=d3a2353a-f764-436e-bde1-771b9815aa4e"
                        className="img-fluid"
                      />
                    </div>
                  </Slider>
                </div>
                <div className="slider_row">
                  <Slider {...settings3}>
                    <div className="client_logo_wrapper">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/client9.jpg?alt=media&token=a3055268-c9dc-4111-84b3-7734dc06d7df"
                        className="img-fluid"
                      />
                    </div>
                    <div className="client_logo_wrapper">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/client10.jpg?alt=media&token=3b0049aa-f2f2-4c8e-84dd-05ef11ac6e0c"
                        className="img-fluid"
                      />
                    </div>
                    <div className="client_logo_wrapper">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/client1.jpg?alt=media&token=b32ba5e7-8576-4fc9-9f5d-0df05ebee4b4"
                        className="img-fluid"
                      />
                    </div>
                    <div className="client_logo_wrapper">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/client2.jpg?alt=media&token=cd6bb4bf-5224-496e-880c-dda3b7c049ce"
                        className="img-fluid"
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default OurClients;
