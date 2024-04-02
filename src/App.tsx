// 05 - Managing Component State => Updating Array

import { useState } from "react";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);

  const addClick = () => {
    // as the same of objects. we can't modify the original Array
    // tags.push('grateful')
    // we create a new Array
    // add
    setTags([...tags, "exciting"]);
  };
  const removeClick = () => {
    // remove
    setTags(tags.filter((tag) => tag !== "cheerful"));
  };
  const updateClick = () => {
    // update
    // we can create a new array and modify the element or we use the map method
    setTags(tags.map((tag) => (tag === "happy" ? "Happiness" : tag)));
  };
  return (
    <div>
      {tags.join(" ")}
      <button onClick={addClick}>Add Me</button>
      <button onClick={updateClick}>Update Me</button>
      <button onClick={removeClick}>Remove Me</button>
    </div>
  );
}

export default App;
