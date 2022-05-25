import React from "react";

function BlogItem({ title, image, text }) {
  return (
    <div className="blogItem">
      <div id="uni" style={{ backgroundImage: `url(${image})`}}></div>
      <h3> {title} </h3>
      <p> {text} </p>
    </div>
  );
}

export default BlogItem;
