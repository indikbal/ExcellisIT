import React from "react";
import "./assets/Style.css";
import Typed from "react-typed";
import review_img from "../img/banner_review_images.png";
import big_logo from "../img/big-logo.png";

const Herobaner = () => {
  return (
    <div>
      <section className="banner_content_section pl-170">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="banner_content">
                {/* <h4>We are</h4> */}
                {/* <h1>Excellis</h1> */}
                <img src={big_logo} className="big_logo" />
                <div className="typing_sec mb-4">
                  <Typed
                    strings={[
                      "Here you can find anything",
                      "Here you can find anythings",
                    ]}
                    typeSpeed={20}
                    backSpeed={30}
                    loop
                  />
                </div>
                <div className="banner_review_img">
                  <img src={review_img} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Herobaner;
