// 05 - Managing Component State => Keeping Components Pure
// A pure function is one that always returns the same result given the same input.
// Pure functions should not modify objects outside of the function.
// example : const result = myFunc(1); if this function return 'a' it should return a every time is called
// if it's return 'b' or 'c'. it's not called a Pure function
// React is designed around this concept
// React expects our function components to be pure. A pure component should always
// return the same JSX given the same input.
//
// props      -> { Component }    -> JSX
// same props                        same JSX
// this is for performance reasons.
// React will skip re-rendering if the inputs of the component haven't change.
//
// To keep our components pure, we should avoid making changes during the render phase.

import Message from "./Message";

function App() {
  return (
    <div>
      {/* here we didn't use the count variable in Message. result 0 0 0 */}
      {/* if we increment the count variable count++ inside our component we get a different results every time we render it. result 2 4 6 */}
      {/* To keep our components pure, we should avoid making changes during the render phase. */}
      {/* if we declare the count variable inside our component it will be pure. */}
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default App;
