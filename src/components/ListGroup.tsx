import { useState } from "react";

// we want to pass an object to the component
// { items: [], heading: string}
// this is why we use Interface in typScript. by convention we use Props as the name of the interface.
// but some people prefer to prefix it by the name of the component. eg ListGroupProps
interface Props {
  items: string[];
  heading: string;
}

/* props: Props => to avoid the repetetion of props we use*/
function ListGroup({ items, heading }: Props) {
  //
  // Passing Data via Props
  // to make this component reusable with other data not just cities like here we use Props(Proprieties)
  // we use props to accept input

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
