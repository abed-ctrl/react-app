// 05 - Managing Component State => Understanding the Strict Mode
// Strict mode helps us catch potential problems such as impure components.
// Starting from React 18, it is enabled by default. It renders our components twice in development
// mode to detect any potential side effects.
// the Strict mode is inside main.tsx => <React.StrictMode>
// this how react render Message App
// <Message />  Message 1 the first render for detecting and reporting potential issues with our code
//              Message 2 the second is to render the user interface
// <Message />  Message 3
//              Message 4
// <Message />  Message 5
//              Message 6

// this is why we get : Message 2 Message 4 Message 6

import Message from "./Message";

function App() {
  return (
    <div>
      <Message />
      {/* we will remove the 2 last Message to see better the effect of strict mode */}
      {/* <Message />
      <Message /> */}
    </div>
  );
}

export default App;
