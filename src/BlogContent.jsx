import React, { useState } from "react";

const BlogContent = ({ description }) => {
  let trimmedContent = description;
  if (description != undefined) {
    trimmedContent =
      description.length <= 350
        ? description
        : description.slice(0, 350) + "...";
  }
  console.log("conetne", trimmedContent);
  return (
    <div>
      <p
        dangerouslySetInnerHTML={{
          __html: trimmedContent,
        }}
      ></p>
    </div>
  );
};
export default BlogContent;
