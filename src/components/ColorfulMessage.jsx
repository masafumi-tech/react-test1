import React from "react";

const ColorfulMessage = (props) => {
  const { color, message, fontSize } = props;
  console.log(props);
  const contentStyle = {
    color,
    fontSize
  };

  return <p style={contentStyle}>{message}</p>;
};

export default ColorfulMessage;