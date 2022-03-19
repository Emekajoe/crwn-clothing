import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.components";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);
function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
