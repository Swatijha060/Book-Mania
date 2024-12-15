// Custom Next Arrow
export const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      style={{
        display: "block",
        position: "absolute",
        top: "50%",
        right: "5px",
        zIndex: 2,
        width: "20px",
        height: "20px",
        border: "solid #333",
        borderWidth: "0 3px 3px 0",
        transform: "rotate(-45deg) translateY(-50%)",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
};

// Custom Prev Arrow
export const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        style={{
          display: "block",
          position: "absolute",
          top: "35%",
          left: "5px",
          zIndex: 2,
          width: "20px",
          height: "20px",
          border: "solid #333",
          borderWidth: "0 3px 3px 0",
          transform: "rotate(135deg) translateY(-50%)",
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    );
  };
