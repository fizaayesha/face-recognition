import React from "react";

function BlogItem({ image, text }) {
  return (
    <div className="blogItem">
      <div id="uni" style={{ backgroundImage: `url(${image})` }}></div>
      <p> {text} </p>
    </div>
  );
}

export default BlogItem;
