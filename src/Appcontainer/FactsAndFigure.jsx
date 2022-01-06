import React from "react";
import "./assets/Style.css";
import Typed from "react-typed";
import globe from "../../src/img/globe.png";

const FactsAndFigure = () => {
  return (
    <div>
      <section className="fact_figure_section">
        <div className="section_typing">
          <Typed strings={["Our Featured Services"]} typeSpeed={150} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="fact_figure_heading">
                <h4>Clients Benefit from 6 yers of our Experience</h4>
              </div>
            </div>
            <div className="col-md-2 pr-0 pr-xs-2 pl-xs-2 pl-0">
              <div className="fact_box">
                <div className="fact_box_wrapper">
                  <h5>6 Years</h5>
                  <p>longest cooperation with one client</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 pr-0 pr-xs-2 pl-xs-2 pl-0">
              <div className="fact_box">
                <div className="fact_box_wrapper">
                  <h5>56%</h5>
                  <p>revenue from clients with us for +3 years</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 pr-0 pr-xs-2 pl-xs-2 pl-0 pr-0">
              <div className="fact_box">
                <div className="fact_box_wrapper">
                  <h5>14</h5>
                  <p>years of Microsoft partnership</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 pr-xs-2 pl-xs-2 pl-0 pr-0">
              <div className="fact_box fact_yellow_box">
                <div className="fact_box_wrapper">
                  <h5>677</h5>
                  <p>BSc, MSc and PhD graduates</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 pr-xs-2 pl-xs-2 pl-0 pr-0">
              <div className="fact_box height_double country_fact_box">
                <div className="fact_box_wrapper">
                  <h5>Clients in 15 countries</h5>
                  <img src={globe} />
                </div>
              </div>
            </div>
            <div className="col-md-8 pr-xs-2 pl-xs-2 pl-0 pr-0">
              <div className="row">
                <div className="col-md-6 pr-xs-2 pl-xs-2 pl-0 pr-0">
                  <div className="fact_box iso_fact_box">
                    <div className="fact_box_wrapper">
                      <h5>ISO 27001:2013</h5>
                      <p>certified</p>
                    </div>
                  </div>
                  <div className="fact_box">
                    <div className="fact_box_wrapper">
                      <h5>winner of Strategic Sourcing Awards 2021</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pr-xs-2 pl-xs-2 pl-0 ">
                  <div className="fact_box fact_black_box">
                    <div className="fact_box_wrapper">
                      <h5>Net Promoter Score: 60</h5>
                      <p>
                        on a scale from -100 to +100, a result deemed excellent
                        for the IT sector
                      </p>
                    </div>
                  </div>
                  <div className="fact_box">
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
