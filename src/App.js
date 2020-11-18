import React, { useState } from "react";
import { Route } from "react-router";
import initialState from "./data";
import TextInput from "./components/TextInput";
import DatePicker from "react-date-picker";

function App() {
  const [scene, setScene] = useState(0);
  const [state, setState] = useState(initialState[scene]);

  const changeHandler = (e) => {
    setState({ ...state, value: e.target.value });
  };

  const dateHandler = (value) => {
    setState({ ...state, value: value });
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
          placeholder={`enter event ${state.name}...`}
        />
      </Route>
      <Route path='/enter-date'>
        <label htmlFor={state.name}>
          enter event date...
          <DatePicker
            name={state.name}
            value={state.value}
            onChange={dateHandler}
          />
        </label>
      </Route>
      <button type='submit' onClick={submitHandler}>
        next
      </button>
    </div>
  );
}

export default App;
