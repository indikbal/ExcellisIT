import React from "react";
const CompanyAddress = () => {
  return (
    <div>
      <div class="row contact-details">
        <div class="col-md-3">
          <h6>
            <img src="img/united-kingdom.png" />
            UK Office
          </h6>
          <div class="footer-links footer_address">
            <ul>
              <li>
                <a href="">
                  <i class="las la-map-marker"></i>109 Spilman Street, GRAIG UK,
                  LL17 1XQ
                </a>
              </li>
              <li>
                <a href="">
                  <i class="las la-phone-volume"></i>+44 115 794 0283
                </a>
              </li>
              <li>
                <a href="">
                  <i class="las la-envelope"></i>info@excellisit.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <h6>
            <img src="img/united-states.png" />
            US Office
          </h6>
          <div class="footer-links footer_address">
            <ul>
              <li>
                <a href="">
                  <i class="las la-map-marker"></i>2641 Fieldcrest Road, New
                  York NY, 10011
                </a>
              </li>
              <li>
                <a href="">
                  <i class="las la-phone-volume"></i>1 (518) 660-0841
                </a>
              </li>
              <li>
                <a href="">
                  <i class="las la-envelope"></i>info@excellisit.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <h6>
            {" "}
            <img src="img/australia.png" /> Australia Office
          </h6>
          <div class="footer-links footer_address">
            <ul>
              <li>
                <a href="">
                  <i class="las la-map-marker"></i>943 Musgrave Street, Atlanta,
                  GA Georgia, 30303.
                </a>
              </li>
              <li>
                <a href="">
                  <i class="las la-phone-volume"></i>(+91) 861 772 4646
                </a>
              </li>
              <li>
                <a href="">
                  <i class="las la-envelope"></i>info@excellisit.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3">
          <h6>
            <img src="img/india.png" />
            India Office
          </h6>
          <div class="footer-links footer_address">
            <ul>
              <li>
                <a href="">
                  <i class="las la-map-marker"></i>Eco Station Building, 6th
                  Floor, Salt Lake, Sector V, Kolkata 700091
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="las la-map-marker"></i>45,8th Cross Road, RMV 2ND
                  Stage, Bengaluru 560094
                </a>
              </li>
              <li>
                <a href="">
                  <i class="las la-phone-volume"></i>(+91) 861 772 4646
                </a>
              </li>
              <li>
                <a href="">
                  <i class="las la-envelope"></i>info@excellisit.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyAddress;
