import React from "react";

const InnerBanner = ({ title, description }) => {
  return (
    <div>
      <section class="banner_img">
        <div class="container">
          <div class="about_text">
            <div class="text_about">
              <div className="innerbanner_element" data-aos="fade-right"></div>
              <div class="row">
                <div class="col-xl-12">
                  <h2>{title}</h2>
                </div>
                <div class="col-xl-9">
                  <p>{description}</p>
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
