import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: white;
  color: green;
  width: 60%;
  margin 5px auto;
  border-radius: 10px;
  border: 1px solid black;
`;

const Card = props => {
  console.log(props.result);

  return (
    <CardContainer>
      <h2>Character Name: {props.result.name} </h2>
      <h3>Gender: {props.result.gender}</h3>
      <h3>Hair Color: {props.result.hair_color}</h3>
    </CardContainer>
  );
};

export default Card;
