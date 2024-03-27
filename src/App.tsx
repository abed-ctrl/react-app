// 04 - Styling Component => Separation of Concerns

// Separation of Concerns is an important design principle in software engineering.
// Separation of Concerns recommend that's we should divide a program into distinct sections where
// each section handles a specific functionality, rather than having everything in one place.
// with this our program will be:
// - Modular
// - Easier to Understand
// - Easier to Maintain
// - Easier to Modify
// modularity provides a number of benefits:
// - if our Programs are modular we can build and test these modules independently and reuse them in other Programs.
// - every module is responsible of a single Concern
// - in a module all complexity and implementation details are hidden behind a well defined Interface

// Separation of concerns is not just about organizing code into files, but rather dividing
// areas of functionality. Therefore, CSS-in-JS does not violate the separation of concerns
// principle as all the complexity for a component remains hidden behind its interface.

import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const heading = "Cities";
  const items = ["Casablanca", "Oued-Zem", "Essaouira"];
  const handleOnSelectedItem = (item: string) => console.log(item);

  // in this case all the complexity around the ListGroup Component is hidden behind a well defined Interface
  // the consumer of this component doesn't care what's behind this interface. doesn't care if we put everything in one file or multiple files
  return (
    <div>
      <ListGroup
        heading={heading}
        items={items}
        onSelectedItem={handleOnSelectedItem}
      />
    </div>
  );
}

export default App;
