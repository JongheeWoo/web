import React from "react";
import "./App.css";
import Header from "./section/Header";
import Gnb from "./section/gnb";
import Works from "./section/works";

function App() {
  return (
    <div className="App">
      <Gnb />
      <Header />
      <Works />
    </div>
  );
}

export default App;
