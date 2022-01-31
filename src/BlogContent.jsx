import React, { useState } from "react";

const BlogContent = ({
  description,
  SingleBlogDescription,
  BlogDescriptionHome,
}) => {
  let trimmedContent = description;
  if (description != undefined) {
    trimmedContent =
      description.length <= 350
        ? description
        : description.slice(0, 350) + "...";
  }

  let trimmedContent2 = BlogDescriptionHome;
  if (BlogDescriptionHome != undefined) {
    trimmedContent2 =
      BlogDescriptionHome.length <= 350
        ? BlogDescriptionHome
        : BlogDescriptionHome.slice(0, 100) + "...";
  }

  // console.log("conetne", trimmedContent);
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: trimmedContent,
        }}
      ></div>
      <div
        dangerouslySetInnerHTML={{
          __html: SingleBlogDescription,
        }}
      ></div>
      <div
        dangerouslySetInnerHTML={{
          __html: trimmedContent2,
        }}
      ></div>
    </div>
  );
};
export default BlogContent;
