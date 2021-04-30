import React from "react";
export const ColorfulMessage = (props) => {
  const { color, message, fontSize } = props;
  const contentStyle = {
    color,
    fontSize
  };

  return <p style={contentStyle}>{message}</p>;
};
