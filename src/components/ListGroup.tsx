import { useState } from "react";

// we want to notify the parent (App) that an element is selected
interface Props {
  items: string[];
  heading: string;
  // (item:string) => void
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: Props) {
  // Passing Function via Props
  // We can pass data and functions to a component using props. Functions are used to
  // notify the parent (consumer) of a component about certain events that occur in the
  // component, such as an item being clicked or selected.

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
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
            onClick={() => {
              setSelectedIndex(index);
              // when we select an item the App Component get notify and printing the name of selected item
              onSelectedItem(item);
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
