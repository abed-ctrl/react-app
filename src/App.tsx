// 04 - Styling Component => Adding Icons

// We can add icons to our applications using the react-icons library.
// npm i react-icons@4.7.1

import { BsCalendarFill } from "react-icons/bs";
import "./App.css";

function App() {
  return (
    <div>
      <BsCalendarFill size="60px" color="blue" />
    </div>
  );
}

export default App;
