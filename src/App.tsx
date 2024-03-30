// 05 - Managing Component State => Understanding the State Hook
// using State Hook we can add a state to our Component

import { useState } from "react";

function App() {
  // 2- State is stored outside of components

  const [isVisible, setVisibility] = useState(false);
  // if we declare a variable
  let count = 0;
  // this is a scooped variable
  // every time we call App component the variable count will initialize to 0
  // this is why we use state hook to store the state outside of this component
  // for some where React will store all the states variables for this component.
  // and React automaticly remove this variables if the component is no longer visible in the screen.

  const handleClick = () => {
    setVisibility(true);
    // this update will be lost
    count++;
    console.log(isVisible);
  };

  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

export default App;
