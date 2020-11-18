import React, { useState } from "react";
import TextInput from "./components/TextInput";
import initialState from "./data";
import { Route } from "react-router";

function App() {
  const [scene, setScene] = useState(0);
  const [state, setState] = useState(initialState[scene]);

  const changeHandler = (e) => {
    setState({ ...state, value: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className='App'>
      <header>
        <h1>Countdown Timer</h1>
      </header>
      <Route exact path='/'>
        <TextInput
          name={state.name}
          value={state.value}
          changeHandler={changeHandler}
          placeholder={"enter event name..."}
        />
      </Route>
      <button type='submit' onClick={submitHandler}>
        next
      </button>
    </div>
  );
}

export default App;
