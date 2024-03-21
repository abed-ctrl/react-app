function ListGroup() {
  // Conditional Rendering
  let items = ["Casablanca", "Oued-Zem", "Essaouira", "Tantan", "Meknes"];
  items = [];

  //3.
  //const message = items.length === 0 ? <p>No item found.</p> : null;

  //4. we use function if we want to pass a parameter.
  // () => {} ARROW FUNCTION
  /*const getMessage = () => {
    return items.length === 0 ? <p>No item found.</p> : null;
  };*/

  //1.
  /*if (items.length == 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );*/

  // use this code is not a correct way to programme. we should avoid repetition of code.
  // we don't have an if statement in JSX only html and react components and expressions allowed.

  return (
    <>
      <h1>List</h1>
      {/* Some time this logic will be more complex in a project */}
      {/* 2. */}
      {/* items.length === 0 ? <p>No item found.</p> : null */}
      {/* this why we should use a variable that return the expression */}
      {/* message */}
      {/* getMessage() */}
      {/* 5. avoid the second part of the conditional statement (Null) */}
      {/* in javascript => true && expression return expression : example : true && 'ali' => 'ali' */}
      {items.length === 0 && <p>No item found</p>}
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
