// 04 - Styling Component => CSS Modules

// if we have two class with the same name, the last one will take effect.
// example .list-group in ListGroup.css and App.css. the .list-group of App.css will add styles to .list-group of ListGroup.css too.
// this clashes that CSS Modules try to solve
// CSS Module is a CSS file in witch all class names are scooped locally just like a JS Module.
// to use module we add module to all css files of components EG: name.module.css
// in the import we will import styles object from name.module.css. styles object contain all the styles in css file
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
