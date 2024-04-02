// 05 - Managing Component State => Updating Objects

import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "Express",
    price: 10,
  });

  const handleClick = () => {
    // in this event handler we don't modify the props of this object like this
    // drink.price = 6
    // setDrink(drink);
    // this will not work. react not detect any changes.
    // so if we want React to detect the changes we should pass a new object.
    // const newDrink = {
    //  title: drink.title,
    //  price: 12,
    // };
    // setDrink(newDrink);
    // just like props we should treat state object as immutable or read-only
    // if we have an object with a ton of props we can't recopy them all.
    // we use the spread operator in javascript ...
    const newDrink = {
      ...drink,
      price: 12,
    };
    setDrink(newDrink);
    // we can create the object inside setDrink directly
    // setDrink({ ...drink, price: 12 });
  };
  return (
    <div>
      {drink.price}
      {/* we want when we click on this button to update the price. */}
      {/* when dealing with array and object we should treat them as immutable or read-only */}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
