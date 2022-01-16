import React, { useState, useEffect } from "react";
import Innerbanner from "./Aboutcontainer/Innerbanner";
import Navbar from "./Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
// .get(`/admin/blogDetail/` + Title, {})

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
      <Innerbanner />
      <section className="single_blog_sec">
        {blogData ? (
          <div className="container">
            <div className="row">
              <div className="col-md-12 p-5">
                <div className="single_blog_inner">
                  <img
                    src={
                      "http://localhost/admin/public/uploads/" +
                      blogData[0].Image
                    }
                  />
                  <h4> {blogData[0].Title}</h4>
                  <p>{blogData[0].Description}</p>
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
