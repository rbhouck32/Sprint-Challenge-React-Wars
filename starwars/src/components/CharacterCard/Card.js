import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background-color: rgba(47,79,79, .5);
  o
  color: 	#DCDCDC;
  width: 49%;
  margin 5px auto;
  border-radius: 10px;
  border: 1px solid black;
`;

const StyledSpan = styled.span`
  color: #f5fffa;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Card = props => {
  console.log(props.result);

  return (
    <FlexContainer>
      <CardContainer>
        <h2>
          Character Name:<StyledSpan> {props.result.name}</StyledSpan>{" "}
        </h2>
        <h3>
          Gender: <StyledSpan>{props.result.gender}</StyledSpan>
        </h3>
        <h3>
          Hair Color: <StyledSpan>{props.result.hair_color}</StyledSpan>
        </h3>
        <h3>
          Eye Color: <StyledSpan>{props.result.eye_color}</StyledSpan>{" "}
        </h3>
        <h3>
          Birth Year: <StyledSpan>{props.result.birth_year}</StyledSpan>
        </h3>
      </CardContainer>
    </FlexContainer>
  );
};

export default Card;
