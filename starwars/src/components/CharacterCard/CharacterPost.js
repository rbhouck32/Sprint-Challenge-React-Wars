import React from "react";
import Card from "./Card";
import styled from "styled-components";

const CharacterPost = props => {
  return (
    <div className="card-container">
      {props.data.map((result, index) => (
        <Card result={result} key={index} />
      ))}
    </div>
  );
};

export default CharacterPost;
