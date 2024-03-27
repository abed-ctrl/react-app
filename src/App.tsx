// 04 - Styling Component => Popular UI LIBRARIES

// There are several UI libraries available that can assist us in quickly building beautiful
// and modern applications. Some popular options include Bootstrap, Material UI,
// TailwindCSS, DaisyUI, ChakraUI, and more.
// - Bootstrap
// - Material UI : google material designs is the design language used in google product
// - Tailwind CSS: a utility-first css framework
//          - Daisy UI : instead of using utility class we can use component like "alert"
//          - Chakra UI : it's similar to Material UI. React component library that's build in top of tailwind

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
