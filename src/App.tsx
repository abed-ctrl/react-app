// 05 - Managing Component State => Updating Nested Objects

import { useState } from "react";

function App() {
  const [customer, setCustomer] = useState({
    name: "Ali",
    address: {
      city: "Oued Zem",
      zipCode: 25350,
    },
  });

  // we wanna update the zip code when handling the click event
  const handleClick = () => {
    // setCustomer({ ...customer });
    // the spread operator in js is shallow.
    // the cloned object refers to the same reference as the original object.
    // if we create two customers with the spread operator we will get 2 customer with the same address.
    // this isn't what we want. we should make the two object independently of each other.
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 25000 },
    });
    // the address object of the first customer object is independently of address object of the second customer object

    // Definitions:

    // Shallow copy is a bit-wise copy of an object which makes a new object by copying the memory address
    // of the original object.That is, it makes a new object by which memory addresses are the same as
    // the original object.

    // Deep copy, copies all the fields with dynamically allocated memory. That is, every value of the copied
    //  object gets a new memory address rather than the original object.
  };
  return (
    <div>
      {customer.address.zipCode}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
