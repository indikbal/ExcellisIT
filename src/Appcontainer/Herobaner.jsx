import React from "react";
import "./assets/Style.css";
import Typed from "react-typed";

const Herobaner = () => {
  return (
    <div>
      <section className="banner_content_section pl-170">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="banner_content">
                <h4>We are</h4>
                <h1>Excellis</h1>
                {/* <img src={big_logo} className="big_logo" /> */}
                <div className="typing_sec mb-4">
                  <Typed
                    strings={[
                      "Here you can find anything",
                      "Here you can find anythings",
                    ]}
                    typeSpeed={20}
                    backSpeed={30}
                    loop
                  />
                </div>
                <div className="banner_review_img">
                  <img src="https://firebasestorage.googleapis.com/v0/b/excellisit2022.appspot.com/o/banner_review_images.png?alt=media&token=074659d6-4a47-4f8f-b905-a7f70e872a87" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Herobaner;
