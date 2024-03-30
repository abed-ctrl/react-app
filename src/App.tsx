// 05 - Managing Component State => Choosing the State Structure

import { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("Ali");
  // const [lastName, setLastName] = useState("OD");
  // if we want to show the fullName. we don't need to use another State fullName because this will be redundant.
  // we can just use it like this.
  //const fullName = firstName + " " + lastName;
  // sometimes our state variables are related, in those cases is better to group them in a single object.
  const [isLoading, setLoading] = useState(false);
  // the first and second state variables are related. we can create an object person and wrap theme into it.
  // we will comment fist and second state variables here and the fullName variable too.

  const [person, setPerson] = useState({
    firstName: "Ali",
    lastName: "OD",
    // we should avoid deeply nested structure like this.
    contact: {
      address: {
        street: "",
      },
    },
    // because is difficult to update an object with this structure.
    // we prefer a flat structure.
    // Best Practices :
    // - Avoid redundant state variables
    // - Group related variables inside an object
    // - Avoid deeply nested structures
  });

  return (
    <div>
      {/* without variable */}
      {/* firstName} {lastName*/}
      <br />
      {/* with variable*/}
      {/* fullName */}
      {/* object variable*/}
      {person.firstName} {person.lastName}
    </div>
  );
}

export default App;
