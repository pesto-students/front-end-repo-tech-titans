import "./ProductControls.css";

import SizeSelector from "../SizeSelector/SizeSelector";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
const ProductControls = () => {
  return (
    <div className="product__controls">
      {/* Size section */}
      <div className="product__size">
        <div className="product__control__label">Size</div>
        <SizeSelector />
      </div>

      {/* Quantity section */}
      <div className="product__quantity">
        <div className="product__control__label">Quantity</div>
        <QuantitySelector />
      </div>
    </div>
  );
};

export default ProductControls;
