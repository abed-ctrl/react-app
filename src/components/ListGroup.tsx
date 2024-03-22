import { useState } from "react";

function ListGroup() {
  // Managing state
  let items = ["Casablanca", "Oued-Zem", "Essaouira", "Tantan", "Meknes"];

  //let selectedIndex = 0;
  // we want to add active class dynamically to <li> Element went user click on it

  // Hook = is a function that allows us to tap into built-in features in React.
  // we never touch the DOM. We just update the state and React Update DOM.
  //const arr = useState(-1);
  //arr[0]; //variable (selectedIndex)
  //arr[1]; //updater function

  // this a React convention
  // we have now a state variable called selectedIndex and a updater function called setSelectedIndex
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // every component will have his own state

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            //first method
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            // we cant use here a local variable selectedIndex
            // we should tell React that this component is going to have data or state that may change over time
            // this is why we should use useState() built-in function.
            // onClick={() => (selectedIndex = index)}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
