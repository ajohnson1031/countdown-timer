import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import { useHistory } from "react-router-dom";
import initialState from "./data";
import TextInput from "./components/TextInput";
import DatePicker from "react-date-picker";

function App() {
  const [scene, setScene] = useState(0);
  const [state, setState] = useState(initialState[scene]);
  let history = useHistory();

  const changeHandler = (e) => {
    let newState = { ...state, value: e.target.value };
    setState(newState);
  };

  const dateHandler = (value) => {
    setState({ ...state, value: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (scene < initialState.length - 1) {
      setScene(scene + 1);
    }
  };

  useEffect(() => {
    setState(initialState[scene]);
    history.push(state.location);
  }, [history, state.location, scene]);

  return (
    <div className='App'>
      <header>
        <h1>Countdown Timer</h1>
      </header>
      <div className='container'>
        <Route exact path='/'>
          <TextInput
            name={state.name}
            value={state.value}
            changeHandler={changeHandler}
            placeholder={`enter event ${state.name}...`}
          />
        </Route>
        <Route path='/enter-date'>
          <label htmlFor={state.name} className='unlinked-label'>
            enter event date...
            <DatePicker
              name={state.name}
              value={state.value}
              onChange={dateHandler}
            />
          </label>
        </Route>

        <button type='submit' onClick={submitHandler} className='next-button'>
          next
        </button>
      </div>
    </div>
  );
}

export default App;
