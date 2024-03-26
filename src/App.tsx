// 04 - Styling Component => CSS-IN-JS

// Another approach for styling our component called CSS-IN-JS.
// With CSS-in-JS, we define all the styles for a component alongside its code. Like CSS
// modules, this provides scoping for CSS classes and eliminates conflicts. It also makes it
// easier for us to change or delete a component without affecting other components.
// and it's easy to style based on props/state.
// this is some libraries that implement this concept: - styled component - emotion - polished

import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  const heading = "Cities";
  const items = ["Casablanca", "Oued-Zem", "Essaouira"];
  const handleOnSelectedItem = (item: string) => console.log(item);

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
