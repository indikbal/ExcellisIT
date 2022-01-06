import React from "react";
import "./assets/Style.css";
import Typed from "react-typed";
import client1 from "../img/client1.png";
import client2 from "../img/client2.png";
import client3 from "../img/client3.png";
import client4 from "../img/client4.png";
import client5 from "../img/client5.png";
import client6 from "../img/client6.png";

const OurClients = () => {
  return (
    <div>
      <section className="our_clients_sec">
        <div className="section_typing">
          <Typed strings={["Our Worldwide CLients"]} typeSpeed={150} />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
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
            <div className="col-md-6">
              <div className="client_logo_sec">
                <div className="client_row1">
                  <marquee direction="up">
                    <div className="client_logo_wrapper">
                      <img src={client1} />
                    </div>
                    <div className="client_logo_wrapper">
                      <img src={client2} />
                    </div>
                    <div className="client_logo_wrapper">
                      <img src={client3} />
                    </div>
                  </marquee>
                </div>
                <div className="client_row2">
                  <marquee direction="down">
                    <div className="client_logo_wrapper">
                      <img src={client4} />
                    </div>
                    <div className="client_logo_wrapper">
                      <img src={client5} />
                    </div>
                    <div className="client_logo_wrapper">
                      <img src={client6} />
                    </div>
                  </marquee>
                </div>
              </div>
              {/* <div className="client_logo_new">
                <div class="a-one animate">
                  {" "}
                  <img src={client1} />
                </div>
                <div class="a-two animate">
                  {" "}
                  <img src={client2} />
                </div>
                <div class="a-three animate">
                  {" "}
                  <img src={client3} />
                </div>
                <div class="a-four animate">
                  {" "}
                  <img src={client4} />
                </div>
                <div class="a-five animate">
                  {" "}
                  <img src={client5} />
                </div>
                <div class="a-six animate">
                  {" "}
                  <img src={client6} />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default OurClients;
