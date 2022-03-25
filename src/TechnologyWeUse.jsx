import React from "react";
import { FaDesktop, FaCode, FaAppStoreIos, FaBug } from "react-icons/fa";

const TechnologyWeUse = () => {
  return (
    <div>
      <section class="sec section_technology">
        <div class="s-TechnologiesLogos s-TechnologiesLogos--WithScanlines ">
          <div class="container">
            <div class="main_heading dark_text">
              <h6 class="s-TechnologiesLogos__Subtitle">
                Technologies &amp; Tools
              </h6>

              <h2 class="h2 h2--WithLine">
                Our solutions are based <br />
                <strong>on the following technologies</strong>
              </h2>
            </div>
            <div class="s-TechnologiesLogos__GridWrapper">
              <div className="technology_new_tab">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="pills-frontend-tab"
                      data-toggle="pill"
                      href="#pills-frontend"
                      role="tab"
                      aria-controls="pills-frontend"
                      aria-selected="true"
                    >
                      <FaDesktop /> Frontend
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="pills-backend-tab"
                      data-toggle="pill"
                      href="#pills-backend"
                      role="tab"
                      aria-controls="pills-backend"
                      aria-selected="false"
                    >
                      <FaCode /> Backend
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="pills-database-tab"
                      data-toggle="pill"
                      href="#pills-database"
                      role="tab"
                      aria-controls="pills-database"
                      aria-selected="false"
                    >
                      <FaAppStoreIos /> Mobile
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="pills-testing-tab"
                      data-toggle="pill"
                      href="#pills-testing"
                      role="tab"
                      aria-controls="pills-testing"
                      aria-selected="false"
                    >
                      <FaBug /> Testing
                    </a>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-frontend"
                    role="tabpanel"
                    aria-labelledby="pills-frontend-tab"
                  >
                    <div class="row">
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-up"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fangular.png?alt=media&token=0b3e2c29-c388-4d9c-93f8-1228c9c1c743"
                              alt="Angular logo"
                            />
                          </div>
                          <h4>Angular</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-down"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fbootstrap.png?alt=media&token=08b0546c-1403-45d6-a069-48952b786b6f"
                              alt="Bootstrap logo"
                            />
                          </div>
                          <h4>Bootstrap</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-up"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Ffigma.png?alt=media&token=9605e5e7-26a2-447f-af83-b44f7338eaf7"
                              alt=" Figma logo"
                            />
                          </div>
                          <h4>Figma</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-down"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fhtml-5.png?alt=media&token=8fad2075-91dc-423e-8586-cac3e6726b8e"
                              alt=" HTML logo"
                            />
                          </div>
                          <h4>HTML 5</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-up"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fjs.png?alt=media&token=b065d67e-a745-4874-94d1-30169aa42df7"
                              alt=" js logo"
                            />
                          </div>
                          <h4>Javascript</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-down"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fphotoshop.png?alt=media&token=54ecbafa-78d4-4c1c-abae-cb5c900e6ac7"
                              alt="photoshop logo"
                            />
                          </div>
                          <h4>Photoshop</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-down"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Freact.png?alt=media&token=9ebfa272-773e-4edc-90b4-9e7351f004b3"
                              alt="React logo"
                            />
                          </div>
                          <h4>React</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-down"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fvue.png?alt=media&token=522903e2-10e9-4ae4-97d8-08e52f9a8902"
                              alt="Vue logo"
                            />
                          </div>
                          <h4>Vue</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-down"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fxd.png?alt=media&token=741a87be-cd7b-46a9-9710-ea5812730055"
                              alt="XD logo"
                            />
                          </div>
                          <h4>Adobe XD</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-backend"
                    role="tabpanel"
                    aria-labelledby="pills-backend-tab"
                  >
                    <div class="row">
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-up"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fphp.png?alt=media&token=54852c4c-e1fb-42d4-847f-2f7970c1635c"
                              alt=" php logo"
                            />
                          </div>
                          <h4>php</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-down"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fwoocommerce.png?alt=media&token=08137df7-8b11-42fc-89e9-217291158fbc"
                              alt=" woocommerce logo"
                            />
                          </div>
                          <h4>Woocommerce</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-up"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fdrupal.png?alt=media&token=8f7a48ae-4f50-46ec-890e-b63bc9aee349"
                              alt="drupal logo"
                            />
                          </div>
                          <h4>Drupal</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-down"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fwordpress.png?alt=media&token=35e74816-f27a-4f9b-a7d4-92a60af5a339"
                              alt="wordpress logo"
                            />
                          </div>
                          <h4>Wordpress</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-down"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fcodeignitor.png?alt=media&token=419d7baf-aa6c-424d-b44a-3322b24416d2"
                              alt="codeignator logo"
                            />
                          </div>
                          <h4>Codeignitor</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-up"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fshopping.png?alt=media&token=c822079a-64dd-4a8e-b667-a41648b6e331"
                              alt="Shopify logo"
                            />
                          </div>
                          <h4>Shopify</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-up"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fdotnet.png?alt=media&token=afb671eb-6dde-41ad-be40-97348bd5501d"
                              alt="dotnet logo"
                            />
                          </div>
                          <h4>.net</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-up"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fmagento.png?alt=media&token=b606822f-aa60-43a9-bab0-d4228d683733"
                              alt="Magento logo"
                            />
                          </div>
                          <h4>Magento</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-database"
                    role="tabpanel"
                    aria-labelledby="pills-database-tab"
                  >
                    <div class="row">
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-up"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fandroid.png?alt=media&token=ba8c4ef2-3133-4484-8647-44a7d7f8562a"
                              alt=" android logo"
                            />
                          </div>
                          <h4>Android</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-down"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fapple.png?alt=media&token=00f51f85-0889-471e-9872-d795ff0eca38"
                              alt=" Apple logo"
                            />
                          </div>
                          <h4>iOS</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-up"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fflutter.png?alt=media&token=c1b36d1a-c7d9-4775-b2a8-237a45ea4ad7"
                              alt="flutter logo"
                            />
                          </div>
                          <h4>Flutter</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-down"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fionic.png?alt=media&token=7b6b48bf-7550-4e97-9375-fb369b424dad"
                              alt="ionic logo"
                            />
                          </div>
                          <h4>ionic</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-down"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fnode-js.png?alt=media&token=4e580735-a635-4350-a753-f1d3b1860019"
                              alt="Node logo"
                            />
                          </div>
                          <h4>Node js</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-up"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Freact.png?alt=media&token=9ebfa272-773e-4edc-90b4-9e7351f004b3"
                              alt="react logo"
                            />
                          </div>
                          <h4>React</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-up"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fswift.png?alt=media&token=23d19c4d-6b90-4581-9e17-778720f34808"
                              alt="Swift logo"
                            />
                          </div>
                          <h4>Swift</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-testing"
                    role="tabpanel"
                    aria-labelledby="pills-testing-tab"
                  >
                    <div class="row">
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-up"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fmobile-testing.png?alt=media&token=6039257f-c00d-4a94-a6bb-6d3dd871e03d"
                              alt=" Mobile Testing logo"
                            />
                          </div>
                          <h4>Mobile Testing</h4>
                        </div>
                      </div>
                      <div class="col-md-2 col-6 col">
                        <div
                          class="s-TechnologiesLogos__Inner"
                          data-aos="fade-up"
                        >
                          <div class="s-TechnologiesLogos__Image">
                            <img
                              data-lazyloaded="1"
                              src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/technology%2Fanalytics.png?alt=media&token=dbbbad17-6cef-42bf-8755-383aecac69be"
                              alt=" Manual Testing logo"
                            />
                          </div>
                          <h4>Manual Testing</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="u-Scanlines"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyWeUse;
