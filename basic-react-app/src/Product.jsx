import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  const oldPrices = ["12,465", "10,500", "1,800", "599"];
  const newPrices = ["8,955", "7,999", "899", "278"];
  const description = [
    ["8,000 DPI", "5 Programmable buttons"], 
    ["intuitive surface", "designed for ipad Pro"], 
    ["designed for iPad Pro","intuitive surface"],
    ["wireless","optical orientation"],
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx] [0]}</p>
      <p>{description[idx] [1]}</p>

      {/* Pass correct price props */}
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Product;
