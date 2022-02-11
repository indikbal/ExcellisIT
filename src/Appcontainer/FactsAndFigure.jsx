import React from "react";
import "./assets/Style.css";
import Typed from "react-typed";
const certificate =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/high-quality.png?alt=media&token=3f389b90-844d-455f-bd60-042f10783b71";
const globe =
  "https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/globe.png?alt=media&token=7562e47e-c6e8-47a2-bc97-49d1afa53900";

const FactsAndFigure = () => {
  return (
    <div>
      <section className="fact_figure_section">
        <div className="section_typing">
          <Typed strings={["Us at a Glance"]} typeSpeed={150} />
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div className="fact_figure_heading">
                <h4>Clients who benefited from us in the last 6 years</h4>
              </div>
            </div>
            <div
              className="col-md-2 col-6 pr-0  pl-3 pl-sm-0 pr-sm-0"
              data-aos="fade-up"
              data-aos-duration="500"
            >
              <div className="fact_box">
                <div className="fact_box_wrapper">
                  <h5>6 Years</h5>
                  <p>longest cooperation with one client</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 pr-3  pl-0 col-6 pl-sm-0 pr-sm-0"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="fact_box">
                <div className="fact_box_wrapper">
                  <h5>56%</h5>
                  <p>revenue from clients with us for +3 years</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-2  pl-3 pr-3 col-12 pl-sm-0 pr-sm-0"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="fact_box">
                <div className="fact_box_wrapper">
                  <h5>14</h5>
                  <p>years of Microsoft partnership</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-2  pl-3 col-6 pr-0 pl-sm-0 pr-sm-0"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="fact_box fact_yellow_box">
                <div className="fact_box_wrapper">
                  <h5>677</h5>
                  <p>BSc, MSc and PhD graduates</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-2 pl-0 pr-3 col-6 pl-sm-0 pr-sm-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="fact_box height_double country_fact_box">
                <div className="fact_box_wrapper">
                  <h5>Clients in 15 countries</h5>
                  <img src={globe} alt="globe icon" />
                </div>
              </div>
            </div>
            <div className="col-md-8  pl-3 pr-3 pl-sm-0 pr-sm-0">
              <div className="row">
                <div className="col-md-6 pl-3 col-6 pr-0 pl-sm-0 pr-sm-0">
                  <div
                    className="fact_box iso_fact_box"
                    data-aos="zoom-in"
                    data-aos-duration="2000"
                  >
                    <div className="fact_box_wrapper">
                      <h5>ISO 27001:2013</h5>
                      <p>certified</p>
                      <img
                        className="certificate_icon"
                        src={certificate}
                        alt="certificate"
                      />
                    </div>
                  </div>
                  <div
                    className="fact_box"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="fact_box_wrapper">
                      <h5>winner of Strategic Sourcing Awards 2021</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-0 col-6  pl-sm-0 ">
                  <div
                    className="fact_box fact_black_box"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <div className="fact_box_wrapper">
                      <h5>Net Promoter Score: 60</h5>
                      <p>
                        on a scale from -100 to +100, a result deemed excellent
                        for the IT sector
                      </p>
                    </div>
                  </div>
                  <div
                    className="fact_box"
                    data-aos="fade-up"
                    data-aos-duration="2500"
                  >
                    <div className="fact_box_wrapper">
                      <h5>16</h5>
                      <p>clients with us for over 5 years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default FactsAndFigure;
