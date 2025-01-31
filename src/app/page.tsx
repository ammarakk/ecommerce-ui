"use client";

import React from "react";




import Home from "./pages/Home"; // Ensure correct path (don't import from `pages/`)
import About from "./pages/About";
import ProductListing from "./Components/ProductListing";
import Cart from "./pages/Cart";
import ShoppingCart from "./pages/ShoppingCart";

const App: React.FC = () => {
  return (
    <div>
      <Home />
      <ProductListing />
      <Cart />
      <ShoppingCart/>
      <About />
    </div>
  );
};

export default App;
