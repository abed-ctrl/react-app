// 05 - Managing Component State => Updating Array of Objects

import { useState } from "react";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const updateClick = () => {
    // update the bug 1 status to  true
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    // we will not create new object for all the array. just the object we will change.
  };
  return (
    <div>
      {bugs.map((bug) => (
        <div key={bug.id}>
          <p>Title: {bug.title}</p>
          <p>Fixed: {bug.fixed ? "Yes" : "No"}</p>
        </div>
      ))}
      <button onClick={updateClick}>Update Me</button>
    </div>
  );
}

export default App;
