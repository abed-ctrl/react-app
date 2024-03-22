import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["Casablanca", "Oued-Zem", "Essaouira", "Tantan", "Meknes"];
  let fruits = ["Orange", "Apple", "Pineapple", "Banana"];

  return (
    <div>
      <ListGroup items={cities} heading="Cities" />
      <ListGroup items={fruits} heading="Fruits" />
    </div>
  );
}

export default App;
