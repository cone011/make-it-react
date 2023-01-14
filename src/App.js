import { Fragment, useState } from "react";
import "./App.css";

function App() {
  const [incrementNumber, SetIncrementNumber] = useState(0);
  const buttonHandler = () => {
    SetIncrementNumber(incrementNumber++);
  };
  return (
    <Fragment>
      <h1>{incrementNumber}</h1>
      <button onClick={buttonHandler}>Incrementa</button>
    </Fragment>
    // <div>
    //   <h1>Mi primera aplicación</h1>
    //   <p>Esta es mi primera aplicación en React, está padrísimo!</p>
    // </div>
  );
}

export default App;
