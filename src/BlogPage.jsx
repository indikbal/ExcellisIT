import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import InnerBanner from "./InnerBanner";
import BlogContent from "./BlogContent";
import { NavLink } from "react-router-dom";

const title = "Our Blogs";
const description =
  "“The people at Codal are what makes them really stand out. They were responsive, attentive, flexible and they sought to understand my business so they could plan ahead—beyond the development project.”";

export class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
    };
  }
  getUsersData() {
    axios
      .get(`/admin/getBlogData`, {})
      .then((res) => {
        const data = res.data;
        console.log(data);
        const blogs = data.map((u) => (
          <div className="col-md-3 col-lg-4 col-xl-3">
            <div className="article_single">
              <span>{u.can}</span>
              <h4>
                <NavLink to={"/blogDetail/" + u.link} className="">
                  {u.Title}
                </NavLink>
              </h4>
              <div className="date_article">{u.Date}</div>
              <div className="article_short_desc">
                <BlogContent description={u.Description} />
                {/* <a href={"/blogDetail/" + u.link} className="article_read_more">
                  Read Full Article
                </a> */}
                <NavLink
                  to={"/blogDetail/" + u.link}
                  className="article_read_more"
                >
                  Read Full Article
                </NavLink>
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

  render(activeStatus) {
    return (
      <div>
        <Navbar activeStatus="blog" />
        <InnerBanner title={title} description={description} />
        <section className="article_section">
          <div className="container-fluid">
            <div className="row col_position">{this.state.blogs}</div>
          </div>
        </section>
      </div>
    );
  }
}
export default BlogPage;
