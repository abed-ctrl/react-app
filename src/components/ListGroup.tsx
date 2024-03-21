import { MouseEvent } from "react";

function ListGroup() {
  // Handling Events
  let items = ["Casablanca", "Oued-Zem", "Essaouira", "Tantan", "Meknes"];

  // In React Each Element have a property onClick to handle Click Event on Element.
  // Print Item Clicked to the Console. using item or items[index]
  // To see the event class we add event to the arrow function param and log it to console

  // we use typescript we should give type of event parameter.
  // type annotation in typeScript => event: MouseEvent
  // with typescript we get auto-completion and type safety
  // Event Handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={index}
            //onClick={() => console.log(item, index)}
            // this logic will be more complex this is why we use function to handle event
            //onClick={(event) => console.log(event)}
            // we don't call the function handleClick() we just pass a reference.
            // so this function will be called later on run time.
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
