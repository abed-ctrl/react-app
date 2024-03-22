// Passing children

import Alert from "./components/Alert";

function App() {
  return (
    <div>
      {/* Passing the text with this way is not a correct way. if we need to pass html or a long text. we want to pass it as a children.*/}
      {/* <Alert text="Hello Cleverali" / > */}
      {/* this what we want*/}
      {/* <Alert>Hello world</Alert> */}
      {/* if we want to add html to the component we should change the type of children Prop to ReactNode. */}
      <Alert alertType="alert-success">
        Hello <strong>Cleverali</strong>
      </Alert>
    </div>
  );
}

export default App;
