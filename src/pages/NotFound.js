import React from "react";
import Button from "../components/UI/Button/Button";

const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "100%",
  maxWidth: 600,
  margin: "100px auto",
  boxSizing: "border-box",
  gap: 20
};

const h1Style = { fontSize: 120, color: "#006838", margin: 0, letterSpacing: 15 };
const h3Style = { fontSize: 45, margin: 0 };
const h4Style = { fontSize: 30, margin: 0 };

const NotFound = () => {
  return (
    <div style={wrapperStyle}>
      <h1 style={h1Style}>404</h1>
      <h3 style={h3Style}>Oops...</h3>
      <h4 style={h4Style}>page not found</h4>
      <Button
        path={"/"}
        buttonName={"Go back to home"}
        className="btnDark centered"
      />
    </div>
  );
};

export default NotFound;