import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import HackerNews from "./components/HackerNews";

function App() {
  return (
    <div>
      <HackerNews></HackerNews>
    </div>
  );
}

export default App;
