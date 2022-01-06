import React from "react";
import "./assets/Style.css";
import Typed from "react-typed";

const OurBlog = () => {
  return (
    <div>
      <section className="our_blog_sec">
        <div className="section_typing">
          <Typed strings={["Our Worldwide CLients"]} typeSpeed={150} />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 pl-sm-0 pl-3 pr-sm-0 pr-3">
              <div className="single_devide_blog">
                <div className="blog_content">
                  <h4>A shoppable video check platform for AiBUY</h4>
                  <p>
                    Find out how Itransition’s dedicated team helped AiBUY
                    release their innovative machine learning-driven shoppable
                    video platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default OurBlog;
