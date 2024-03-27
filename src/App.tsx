// 04 - Styling Component => Inline Styles

// Although inline styles are easy to apply, they can make our code difficult to maintain
// over time and should only be used as a last resort.

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
