import React from "react";

// Custom Next Arrow Component
export const CustomNextArrow: React.FC<{ onClick?: () => void }> = ({
  onClick,
}) => {
  return (
    <div
      style={{
        display: "block",
        position: "absolute",
        top: "50%",
        right: "10px",
        zIndex: 9999,
        width: "30px",
        height: "30px",
        border: "solid #333",
        borderWidth: "0 3px 3px 0",
        boxSizing: "border-box",
        transform: "rotate(-45deg) translateY(-50%)",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
};

// Custom Prev Arrow Component
export const CustomPrevArrow: React.FC<{ onClick?: () => void }> = ({
  onClick,
}) => {
  return (
    <div
      style={{
        display: "block",
        position: "absolute",
        top: "50%",
        left: "10px",
        zIndex: 10,
        width: "30px",
        height: "30px",
        border: "solid #333",
        borderWidth: "0 3px 3px 0",
        boxSizing: "border-box",
        transform: "rotate(135deg) translateY(-50%)",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
};
