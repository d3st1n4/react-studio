import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItemIndex !== -1) {
      // If the item is already in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div className="App">
      <h1>Destiny's Bakery</h1>
      <div className="flex-container">
        <div className="bakery-items-container">
          {bakeryData.map((item, index) => (
            <BakeryItem
              key={index}
              name={item.name}
              price={item.price}
              description={item.description}
              imgUrl={item.image}
              addToCart={() => addToCart(item)}
            />
          ))}
        </div>

        <div className="cart">
          <h2>Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <div key={index}>
                {item.quantity}x {item.name}
              </div>
            ))}
          </ul>
          <p>
            Total Items:{" "}
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </p>
          <p>
            Total Price: $
            {cart
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
