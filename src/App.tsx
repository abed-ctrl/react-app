// 05 - Managing Component State => Understanding the State Hook
// using State Hook we can add a state to our Component

import { useState } from "react";

function App() {
  // 3- Use hooks at the top level of your Component
  // we use State Hook to declare and initialize to Booleans Variables.
  // these name (isVisible, isApproved) are local identifiers in this function.
  // React is unaware of them .
  // when we use State Hook we tell react we want to store 2 Booleans values.
  // React will store somewhere and most likely like this [false, true]
  // next time we re-render this component. React will grab false and assign it to isVisible and true to isApproved.
  // this is why we can't use State Hook inside if statement or for loops or nested functions
  // React keeps the state in memory as longer is the component is visible in the screen.
  const [isVisible, setVisibility] = useState(false);
  const [isApproved, setApproved] = useState(true);

  const handleClick = () => {
    setVisibility(true);
    console.log(isVisible);
  };

  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

export default App;
