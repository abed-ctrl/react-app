// 05 - Managing Component State => Understanding the State Hook
// using State Hook we can add a state to our Component

import { useState } from "react";

function App() {
  // 1- React update state asynchronously

  const [isVisible, setVisibility] = useState(false);
  const handleClick = () => {
    setVisibility(true);
    // if we add a log to see isVisible after setVisibility to true we will notice that isVisible have the old value false
    console.log(isVisible);
    // the update is not applied immediately. it going to be applied asynchronously meaning in the future
    // this is done for performance reasons. because if we have many useState like this.
    // setName('Ali')
    // setAge('32')
    // ......
    // we can't update the component every useState. the update take effect when we finish the handleClick function.
  };
  // after handleClick React update all.

  return (
    <div>
      <button onClick={handleClick}>Show</button>
      {/* in console you will see false and here you will see true because the handleClick finished*/}
      <p>{String(isVisible)}</p>
    </div>
  );
}

export default App;
