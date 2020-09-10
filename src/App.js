import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Feed/>
      <Widget/>
    </div>
  );
}

export default App;
