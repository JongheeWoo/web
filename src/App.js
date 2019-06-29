import React from "react";
import "./App.css";
import Header from "./section/Header";
import Gnb from "./section/gnb";
import Works from "./section/works";
import Footer from "./section/footer";

function App() {
  return (
    <div className="App">
      <Gnb />
      <Header />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
