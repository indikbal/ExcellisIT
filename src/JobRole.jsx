import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import BlogContent from "./BlogContent";

const JobRole = (data) => {
  const { id } = useParams();
  // console.log(Title);
  const [careerData, setCareerData] = useState(null);
  useEffect(() => {
    axios
      .get(`/admin/getCareerData/` + id, {})
      .then((res) => {
        const data = res.data;
        setCareerData(data);
        console.log(careerData);
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
                {careerData ? (
                  <h4> {careerData[0].Post}</h4>
                ) : (
                  <div>Loading</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="single_blog_sec">
        {careerData ? (
          <div className="container">
            <div className="row">
              <div className="col-md-12 p-5">
                <div className="single_blog_inner">
                  <h4> {careerData[0].Post}</h4>
                  <div className="articles_post_info">
                    <p>Last Modified : {careerData[0].Skill}</p>
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
export default JobRole;
