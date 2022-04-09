import React from "react";
import styled from "styled-components";
import Button from "../components/UI/Button/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-content: center;
  margin-top: 100px;
  gap: 20px;

  h1 {
    font-size: 120px;
    color: #006838;
    margin: 0;
    letter-spacing: 15px;
  }
  h3 {
    font-size: 45px;
    margin: 0;
  }
  h4 {
    font-size: 30px;
    margin: 0;
  }
`;

const NotFound = () => {
  return (
    <Wrapper style={{ textAlign: "center" }}>
      <h1>404</h1>
      <h3>Oops...</h3>
      <h4>page not found</h4>
      <Button
        path={"/"}
        buttonName={"Go back to home"}
        className="btnDark centered"
      />
    </Wrapper>
  );
};

export default NotFound;
