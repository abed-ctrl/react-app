import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["Casablanca", "Oued-Zem", "Essaouira", "Tantan", "Meknes"];
  let fruits = ["Orange", "Apple", "Pineapple", "Banana"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
