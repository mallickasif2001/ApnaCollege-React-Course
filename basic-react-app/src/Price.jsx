export default function Price({ oldPrice, newPrice }) {
  const oldStyles = {
    textDecorationLine: "line-through",
  };

  const newStyles = {
    fontWeight: "bold",
  };

  const boxStyles = {
    backgroundColor: "#e0c367",
    height: "30px",
    width: "200px",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
    display: "inline-block",
  };

  return (
    <div style={boxStyles}>
      <span style={oldStyles}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;
      <span style={newStyles}>{newPrice}</span>
    </div>
  );
}
