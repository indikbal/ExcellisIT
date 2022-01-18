import React from "react";

const InnerBannerContent = (props) => {
  return (
    <div>
      <div class="text_about">
        <div class="row">
          <div class="col-xl-12">
            <h2>{props.content}</h2>
          </div>
          <div class="col-xl-9">
            <p>
              “The people at Codal are what makes them really stand out. They
              were responsive, attentive, flexible and they sought to understand
              my business so they could plan ahead—beyond the development
              project.”
            </p>
            <span>Eric Zabinski CEO, OmniChannel Digital</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerBannerContent;
