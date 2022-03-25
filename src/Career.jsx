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
                    onclick="$('#applyposition').val('1');$('#jobtitle').html('Graphic Web Designer');"
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
        </section>
      </div>
    );
  }
}
export default Career;
