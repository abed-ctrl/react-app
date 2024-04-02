// 05 - Managing Component State => Simplifying Update Logic with Immer
// installing Immer => npm i immer@9.0.19
// we will use the same code of the previous lesson
// Immer is a library that can help us update objects and arrays in a more concise and mutable way

import { useState } from "react";
// import produce from Immer Library
import produce from "immer";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const updateClick = () => {
    // update the bug 1 status to  true
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

    // draft is a proxy object that records the changes we will gonna apply to the bugs array
    // imagine that the draft is a copy of bugs array. so we are free to mutate or modify it.
    // we don't need to map anything or doing map.
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
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
