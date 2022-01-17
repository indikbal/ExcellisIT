import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "../src/Appcontainer/assets/Style.css";

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
          <div className="col-md-3">
            <div className="article_single">
              <span>{u.can}</span>
              <h4>
                <a href="#">{u.Title}</a>
              </h4>
              <div className="date_article">{u.Date}</div>
              <div className="article_short_desc">
                <p>{u.Description}</p>
                <a href={"/blogDetail/" + u.link} className="article_read_more">
                  Read Full Article
                </a>
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
        <Navbar />
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
