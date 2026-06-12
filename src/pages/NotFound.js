import React from "react";
import Button from "../components/UI/Button/Button";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <h1>404</h1>
      <h3>Oops...</h3>
      <h4>page not found</h4>
      <Button
        path={"/"}
        buttonName={"Go back to home"}
        className="btnDark centered"
      />
    </div>
  );
};

export default NotFound;