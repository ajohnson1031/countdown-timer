import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import { useHistory } from "react-router-dom";
import initialState from "./data";
import TextInput from "./components/TextInput";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import CountDown from "./components/CountDown";

function App() {
  const [scene, setScene] = useState(0);
  const [state, setState] = useState(initialState[scene]);
  const [errors, setErrors] = useState(null);
  let history = useHistory();

  const changeHandler = (e) => {
    let newState = { ...state, value: e.target.value };
    setState(newState);
    setErrors(null);
  };

  const dateTimeHandler = (value) => {
    setState({ ...state, value: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (scene === 0 && state.value === "") {
      setErrors("you must enter an event name...");
    } else if (scene < initialState.length - 1) {
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
              onChange={dateTimeHandler}
            />
          </label>
        </Route>
        <Route path='/enter-time'>
          <label htmlFor={state.name} className='unlinked-label'>
            enter event time...
            <TimePicker
              name={state.name}
              value={state.value}
              onChange={dateTimeHandler}
            />
          </label>
        </Route>
        <Route path='/final-countdown'>
          <CountDown />
        </Route>

        {scene <= initialState.length - 2 && (
          <button type='submit' onClick={submitHandler} className='next-button'>
            {state.buttonText}
          </button>
        )}
      </div>
      {errors && <div className='errors'>{errors}</div>}
    </div>
  );
}

export default App;
