import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import BlogContent from "./BlogContent";

const BlogDetails = (data) => {
  const { Title } = useParams();
  // console.log(Title);
  const [blogData, setBlogData] = useState(null);
  useEffect(() => {
    axios
      .get(`/admin/blogDetail/` + Title, {})
      .then((res) => {
        const data = res.data;
        setBlogData(data);
        console.log(blogData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="article_single_banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="artcle_single_banner_tiitle">
                {blogData ? <h4> {blogData[0].Title}</h4> : <div>Loading</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="single_blog_sec">
        {blogData ? (
          <div className="container">
            <div className="row">
              <div className="col-md-12 p-5">
                <div className="single_blog_inner">
                  <div className="blog_details_img">
                    <img
                      src={
                        "http://localhost/admin/public/uploads/" +
                        blogData[0].Image
                      }
                    />
                  </div>
                  <h4> {blogData[0].Title}</h4>
                  <BlogContent
                    SingleBlogDescription={blogData[0].Description}
                  />
                  <div className="articles_post_info">
                    <p>Last Modified : {blogData[0].updated_at}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>Loading</div>
        )}
      </section>
    </div>
  );
};
export default BlogDetails;
