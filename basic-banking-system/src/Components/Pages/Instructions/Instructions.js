import React from "react";
import { InstructionsList } from "./InstructionsList";
import InstructionsItem from "./InstructionsItem";
import "../../css/style1.css";
function Instructions() {
  return (
    <>
      <div className="blog">
        <div className="blogList">
          {InstructionsList.map((blogItem, key) => {
            return (
              <InstructionsItem
                key={key}
                image={blogItem.image}
                text={blogItem.text}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Instructions;
