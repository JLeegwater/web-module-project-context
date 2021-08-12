import React, { useState, useReducer, createContext, useContext } from "react";
import { Route } from "react-router-dom";
import data from "./data";

import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <Navigation />

        <Route exact path="/">
          <Products />
        </Route>

        <CartContext.Provider value={{ cart }}>
          <Route path="/cart">
            <ShoppingCart cart={cart} />
          </Route>
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
