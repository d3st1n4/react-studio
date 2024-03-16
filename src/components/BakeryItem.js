// TODO: create a component that displays a single bakery item
import React from "react";

const BakeryItem = ({ name, price, description, imgUrl, addToCart }) => {
  return (
    <div className="bakery-item">
      <div class="card">
        <img src={imgUrl} alt={name} />
        <div class="info-container">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default BakeryItem;
