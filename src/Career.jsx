import React from "react";
import Typed from "react-typed";
import axios from "axios";
import { NavLink } from "react-router-dom";

export class Career extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
    };
  }
  getUsersData() {
    axios
      .get(`/admin/getCareerData`, {})
      .then((res) => {
        const data = res.data;
        console.log(data);
        const blogs = data.map((u) => (
          <div class="single_job_card mb-5">
            <div class="row ">
              <div class="col-lg-9">
                <div class="pane__title_wrapper">
                  <h4 class="job__role">{u.Post}</h4>
                </div>
                <div class=" job__description_abstract mt-5">
                  <h5>
                    <span>Work Location: </span>
                    {u.Location}
                  </h5>
                  <h5>
                    <span>Qualification: </span>
                    {u.Qualification}
                  </h5>
                  <h5>
                    <span>Skills required: </span>
                    {u.Skill}
                  </h5>
                  <h5>
                    <span>Experience: </span>
                    {u.Experience}
                  </h5>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="pane__links">
                  <NavLink
                    to={"/JobRole/" + u.id}
                    className="article_read_more"
                  >
                    View Details
                  </NavLink>

                  <a
                    data-toggle="modal"
                    data-target="#jobmodal"
                    type="button"
                    class="banner_btn animate__slideInUp animate__animated modal__button"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ));
        this.setState({
          blogs,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getUsersData();
  }

  render() {
    return (
      <div>
        {/* <section className="our_blog_sec pt-0">
          <div className="section_typing">
            <Typed strings={["Our Latest Blog"]} typeSpeed={150} />
          </div>
          <div className="container-fluid">
            <div className="row col_position">{this.state.blogs}</div>
          </div>
        </section> */}

        <section className="carre_oper_sec">
          <div className="container">
            <div class="job_requirements_card__container mt-80">
              <div class="tab-content mt-60" id="pills-tabContent">
                <div
                  id="pills_allJobs"
                  class="tab-pane fade active show"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab1"
                >
                  <div className="">{this.state.blogs}</div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="modal fade show apply_job_modal"
            id="jobmodal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
          >
            <div class="modal-dialog  modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5
                    class="modal-title apply_now__title"
                    id="exampleModalLongTitle"
                  >
                    Apply Now
                  </h5>

                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    id="applynow_close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>

                <div class="modal-body">
                  <form
                    action=""
                    method="post"
                    id="applynowfrm"
                    enctype="multipart/form-data"
                  >
                    <div class="">
                      <h6>Please provide the following</h6>

                      <div class="row mt-4">
                        <div class="col-md-12">
                          <div class="con_foo_input_wrapper">
                            <label>
                              Position<sup>*</sup>
                            </label>

                            <select
                              name="position"
                              id="applyposition"
                              required=""
                            >
                              <option value="">Select Position</option>
                              <option value="1">Graphic Web Designer</option>
                              <option value="3">Senior HR Recruiter</option>
                              <option value="4">
                                Digital Marketing Executive
                              </option>
                              <option value="5">
                                Business Development Executive
                              </option>
                              <option value="6">WordPress Developer</option>
                              <option value="7">SEO Expert</option>
                              <option value="8">Data Entry Operator</option>
                              <option value="9">Senior Accountant</option>
                              <option value="10">Senior Content Writer</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <div class="con_foo_input_wrapper">
                            <label>
                              First Name<sup>*</sup>
                            </label>

                            <input
                              type="text"
                              name="fname"
                              class=""
                              placeholder="John"
                              required=""
                            />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="con_foo_input_wrapper">
                            <label>
                              Last Name<sup>*</sup>
                            </label>

                            <input
                              type="text"
                              name="lname"
                              class=""
                              placeholder="Doe"
                              required=""
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6">
                          <div class="con_foo_input_wrapper">
                            <label>
                              Email Address<sup>*</sup>
                            </label>

                            <input
                              type="text"
                              name="emailaddress"
                              class=""
                              placeholder="johndoe@gmail.com"
                              required=""
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="con_foo_input_wrapper">
                            <label>
                              Phone Number<sup>*</sup>
                            </label>
                            <input
                              type="tel"
                              name="mobile"
                              class=""
                              placeholder="9032842827"
                              required=""
                            />
                          </div>
                        </div>

                        <div class="col-md-12">
                          <div class="con_foo_input_wrapper">
                            <label>Professional account link</label>
                            <input type="text" name="proflink" class="" />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="con_foo_input_wrapper">
                            <label>Attach your CV files</label>

                            <input
                              class="file_type"
                              name="resume"
                              type="file"
                              required=""
                            />
                          </div>
                        </div>
                      </div>

                      <hr />

                      <h6>I currently work for</h6>

                      <div class="row">
                        <div class="col-md-12">
                          <div class="con_foo_input_wrapper">
                            <label>
                              Company Name<sup>*</sup>
                            </label>

                            <input
                              type="text"
                              name="company"
                              class=""
                              required=""
                            />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="con_foo_input_wrapper">
                            <label>
                              Designation/Position<sup>*</sup>
                            </label>

                            <input
                              type="text"
                              name="designation"
                              class=""
                              required=""
                            />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="con_foo_input_wrapper">
                            <label>
                              Notice Period(How soon can you join?)<sup>*</sup>
                            </label>

                            <div class="row">
                              <div class="col-sm-8 pr-0">
                                <input
                                  type="text"
                                  name="joiningperiod"
                                  class=""
                                  required=""
                                />
                              </div>

                              <div class="col-sm-4 pl-0">
                                <div class="con_foo_input_wrapper">
                                  <select name="joiningperiodtype">
                                    <option value="Month">Month(s)</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="con_foo_input_wrapper">
                            <label>
                              Current Salary<sup>*</sup>
                            </label>

                            <div class="row">
                              <div class="col-sm-3 pr-0">
                                <div class="con_foo_input_wrapper">
                                  <select>
                                    <option value="inr">INR</option>
                                  </select>
                                </div>
                              </div>

                              <div class="col-sm-9 pl-0">
                                <input
                                  type="text"
                                  name="currentsalary"
                                  class=""
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="con_foo_input_wrapper">
                            <label>
                              Expected Salary<sup>*</sup>
                            </label>

                            <div class="row">
                              <div class="col-sm-3 pr-0">
                                <div class="con_foo_input_wrapper">
                                  <select>
                                    <option value="inr">INR</option>
                                  </select>
                                </div>
                              </div>

                              <div class="col-sm-9 pl-0">
                                <input
                                  type="text"
                                  name="expectedsalary"
                                  class=""
                                  required=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12">
                          <div class="privacy_policy__title_wrapper">
                            <h5>
                              Why we collect this information and how we use it
                            </h5>

                            <p>
                              We treat your information with respect, and we
                              will never sell or share it to other companies.
                              This information is collected out of necessity for
                              basic understand of your job profile and
                              experience . We will contact you over the phone or
                              email you for walk-in interview ...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Career;
