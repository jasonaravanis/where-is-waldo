// Libraries
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Assets
import waldoWave from "../img/waldo-wave.jpg";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const WaldoImage = styled.img`
  width: 6rem;

  @media (max-width: 600px) {
    width: 3rem;
  }
`;

const Title = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 3rem;
  margin: 1rem;

  @media (max-width: 700px) {
    font-size: 1.5rem;
    width: 100px;
  }
`;

const Span = styled.span`
  color: ${(props) => props.color};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Logo() {
  return (
    <StyledLink exact="true" to="/">
      <Container>
        <WaldoImage src={waldoWave} />
        <Title>
          <Span color="#118ab2">Where's </Span>{" "}
          <Span color="#e63946"> Waldo?</Span>
        </Title>
      </Container>
    </StyledLink>
  );
}

export default Logo;
