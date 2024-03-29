// 05 - Managing Component State => Understanding the State Hook
// using State Hook we can add a state to our Component

import { useState } from "react";

function App() {
  // 1- React update state asynchronously

  const [isVisible, setVisibility] = useState(false);
  const handleClick = () => {
    setVisibility(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

export default App;
