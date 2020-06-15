import React from "react";
import logo from "./logo.svg";
import "./App.css";

import SpeechTextInput from "./SpeechTextInput";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SpeechTextInput />
      </header>
    </div>
  );
};

export default App;