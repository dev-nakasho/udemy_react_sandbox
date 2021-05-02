import React from "react";

export const ColorMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "30px",
    fontWeight: "bold"
  };
  return (
    <>
      <p style={contentStyle}>{children}</p>
    </>
  );
};
