import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDarkMode from "../hooks/useDarkMode";
import {
  decrement,
  increment,
  incrementbyvalue,
} from "../redux-toolkit/counterSlice";
import { toggleDarkMode } from "../redux-toolkit/globalSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const incrementbyvalueHandler = () => {
    dispatch(incrementbyvalue(10));
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div className="flex flex-col items-center p-5 bg-white shadow w-[400px] mx-auto mt-10">
      <h2 className="mb-5">Count: {count}</h2>
      <div className="flex justify-center items-center gap-x-5">
        <button
          className="inline-block p-2 border boder-gray-200"
          onClick={incrementHandler}
        >
          Increment
        </button>
        <button
          className="inline-block p-2 border boder-gray-200"
          onClick={incrementbyvalueHandler}
        >
          Increment 10
        </button>
        <button
          className="inline-block p-2 border boder-gray-200"
          onClick={decrementHandler}
        >
          Decrement
        </button>
        <SwitchDarkMode></SwitchDarkMode>
      </div>
    </div>
  );
};

export const SwitchDarkMode = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const dispatch = useDispatch();

  const toggleDarkModeHandler = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode(!darkMode));
  };

  useEffect(() => {
    dispatch(toggleDarkMode(darkMode));
  }, []);

  return <button onClick={toggleDarkModeHandler}>Toggle dark mode</button>;
};

export default Counter;
