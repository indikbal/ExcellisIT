import React from "react";
import ThreeScene from "../Appcontainer/ThreeScene";
import Footer from "../Footer";
import InnerBanner from "../InnerBanner";
import Loader from "../Loader";
import Navbar from "../Navbar";
import LocationOnMap from "../../src/Appcontainer/LocationOnMap";

const ContactUs = () => {
  return (
    <div>
      <Loader />
      <Navbar />
      <ThreeScene />
      <InnerBanner />
      <section class="contact_us__heading_section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="contact_us___heading_title_wrapper">
                <h4>Contact</h4>
                <p>
                  Talk to us about your requirements, be it consulting or
                  development <br />
                  We would be ..happy to help you..
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="contact_us__body_section">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="contact_us__body_title_wrapper">
                <h4>IT ALL STARTS WITH A CONVERSATION</h4>
                <p>
                  Simply fill in a few details in our contact form or get in
                  touch with us by email with your iqueries.
                </p>
              </div>
              <div class="points point-1 mt-60">
                <h5 class="point__header">
                  <span>1.</span>Research
                </h5>
                <p class="point__body">
                  Simply fill in a few details in our contact form or get in
                  touch with us by email with your iqueries.
                </p>
              </div>
              <div class="points point-2">
                <h5 class="point__header">
                  <span>2.</span> Analyse
                </h5>
                <p class="point__body">
                  Our analysis team will dig deep into your business
                  requirements and process.
                </p>
              </div>
              <div class="points point-3">
                <h5 class="point__header">
                  <span>3.</span>Solutions
                </h5>
                <p class="point__body">
                  Our consultants will get back to you within next 48 hours with
                  the best possible solution for your business.
                </p>
              </div>
            </div>
            <div class="col-md-8 ">
              <div class="left_foo_con_sec contact__form">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form__heading">
                      <div class="row">
                        <div class="col-sm-2">
                          <div class="icon-container">
                            <i class="ph-headset"></i>
                          </div>
                        </div>
                        <div class="col-sm-10">
                          <h4>
                            Talk to us about your requirements, be it consulting
                            or development, We would be ..happy to help you..
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="con_foo_input_wrapper">
                      <label>
                        Your Name<sup>*</sup>
                      </label>
                      <input type="text" class="" name="name" required="" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="con_foo_input_wrapper">
                      <label>
                        Email Address<sup>*</sup>
                      </label>
                      <input type="email" class="" name="email" required="" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="con_foo_input_wrapper">
                      <label>
                        Company<sup>*</sup>
                      </label>
                      <input type="text" class="" name="company" required="" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="con_foo_input_wrapper">
                      <label>Apr. Budget</label>
                      <input type="text" class="" name="budget" required="" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="con_foo_input_wrapper">
                      <label>Your Message</label>
                      <textarea rows="10" name="message"></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="con_foo_input_wrapper">
                      <label>Attach files</label>
                      <input class="file_type" type="file" name="contactfile" />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-4">
                    <button className="contact_from_submit">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LocationOnMap />
      <Footer />
    </div>
  );
};

export default ContactUs;
