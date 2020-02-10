import React from "react";
import Card from "./Card";

const CharacterPost = props => {
  return (
    <div className="character-posts-container">
      {props.data.map((result, index) => (
        <Card result={result} key={index} />
      ))}
    </div>
  );
};

export default CharacterPost;
