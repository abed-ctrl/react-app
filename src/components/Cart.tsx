import React from "react";

interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* we will not update the state here. only the component that have the state should modify it. in this case App Component. we should just notify it */}
      <button onClick={onClear}>Clear</button>
    </>
  );
};

export default Cart;
