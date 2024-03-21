function ListGroup() {
  // Rendering lists dynamically
  const items = ["Casablanca", "Oued-Zem", "Essaouira", "Tantan"];
  // we don't have for or while loop in React we use javascript functions and methods like map

  // Warning: Each child in a list should have a unique "key" prop.
  // React needs Key prop to track our items. if we delete an element or update it React will know which item to delete or update
  // All the time keys are ids.

  //<ul> and <ol> must only directly contain <li>, <script> or <template> elements
  //we use index as a key to solve this warning
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
