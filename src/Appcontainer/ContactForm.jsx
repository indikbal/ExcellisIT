import React from "react";
import "./assets/Style.css";
import Typed from "react-typed";

const ContactForm = () => {
  return (
    <div>
      <form
        method="POST"
        action="contact.php"
        enctype="multipart/form-data"
        id="footerfrm"
      >
        <h4 id="showmsgfooter">Personal Details</h4>
        <div class="row">
          <div class="col-md-6">
            <div class="con_foo_input_wrapper">
              <label>
                Name<sup>*</sup>
              </label>
              <input type="text" name="Name" class="" required="" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="con_foo_input_wrapper">
              <label>
                Email Address<sup>*</sup>
              </label>
              <input type="email" name="Email" class="" required="" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="con_foo_input_wrapper">
              <label>
                Phone Number<sup>*</sup>
              </label>
              <input type="tel" name="Mobile" class="" required="" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="con_foo_input_wrapper">
              <label>Skype ID</label>
              <input type="text" name="SkypeId" class="" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="con_foo_input_wrapper">
              <label>
                What is your interest?<sup>*</sup>
              </label>
              <select required="" name="UserInterest">
                <option value="">Select Option</option>
                <option value="Website Development">Become A Partner</option>
                <option value="Website Development">Website Development</option>
                <option value="E-commerce Development">
                  E-commerce Development
                </option>
                <option value="Branding">Branding</option>
                <option value="App Development">App Development</option>
                <option value="Domains &amp; Hosting">
                  Domains &amp; Hosting
                </option>
                <option value="Just having a Coffee">
                  Just having a Coffee
                </option>
                <option value="Working at TenTwenty">
                  Working at TenTwenty
                </option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="con_foo_input_wrapper">
              <label>
                Where did you here about us?<sup>*</sup>{" "}
              </label>
              <select name="AboutUs" required="">
                <option value="">Select Option</option>
                <option value="Google">Google</option>
                <option value="Clutch">Clutch</option>
                <option value="People Per Hour">People Per Hour</option>
                <option value="Good Firms">Good Firms</option>
                <option value="Personal Reference">Personal Reference</option>
                <option value="Social Media">Social Media</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="con_foo_input_wrapper">
              <label>Your Message</label>
              <textarea name="Message"></textarea>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="con_foo_input_wrapper">
              <label>Attach files</label>
              <input class="file_type" type="file" name="fileToUpload" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <button className="enquire_btn">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
