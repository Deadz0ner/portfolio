// GeometricShape.js
import React from "react";

const GeometricShape = ({ as: Component = "div", style, ...props }) => {
  return (
    <Component
      style={{
        position: "absolute",
        background: "white",
        filter: "blur(1px)",
        opacity: 0.15,
        ...style,
      }}
      {...props}
    />
  );
};

export default GeometricShape;

