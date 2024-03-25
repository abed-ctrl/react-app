// 04 - Styling Component => Vanilla or Plain CSS

// when we create a folder for our component ListGroup the import come a little bit ugly
//import ListGroup from "./components/ListGroup/ListGroup";
// this is why we add a index.ts to the component folder to remove second ListGroup from import
// by default if we don't supply a file and just adding a folder TS look for a file called index.ts
import ListGroup from "./components/ListGroup";

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
