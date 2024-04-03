// 05 - Managing Component State => Sharing State between Components
// in this example we will share the count of the products that exist in Cart Components.
// we want when a user modify the cart Component then we will modify the count variable on navbar Component.

import { useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  const handleClear = () => setCartItems([]);

  return (
    <div>
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={handleClear} />
    </div>
  );
}

export default App;
