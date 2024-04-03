import React from "react";

// we just need to share the count of products not the products
interface Props {
  cartItemsCount: number;
}

const Navbar = ({ cartItemsCount }: Props) => {
  return <div>Navbar : {cartItemsCount}</div>;
};

export default Navbar;
