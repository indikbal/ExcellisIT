import React, { useState } from "react";
import Innerbanner from "./Aboutcontainer/Innerbanner";
import Navbar from "./Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
// .get(`/admin/blogDetail/` + Title, {})

const BlogDetails = (data) => {
  const { Title } = useParams();
  // console.log(Title);
  axios
    .get(`/admin/blogDetail/` + Title, {})
    .then((res) => {
      const data = res.data;
      console.log(data);
      const blogs = data.map((u) => (
        <div className="col-md-6 pl-sm-0 pl-3 pr-sm-0 pr-3">
          <div className="single_devide_blog single_blog">
            <div className="blog_content">
              <h4>{u.Title}</h4>
              <p>{data.Description}</p>
            </div>
            <div className="blog_img">
              <img src={"http://localhost/admin/public/uploads/" + u.Image} />
            </div>
          </div>
        </div>
      ));
      // this.setState({
      //   blogs,
      // });
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div>
      <Navbar />
      <Innerbanner />
      <section className="single_blog_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="single_blog_inner">{data.Description}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BlogDetails;
