import React, { Component } from "react";
import "./App.css";

import UNSC from "./UNSC/UNSC";
import Covenant from "./Covenant/Covenant";
import Promethean from "./Promethean/Promethean";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 id="headerH1">Factions in Halo 5</h1>
        </div>
        <div className="factions">
          <h1>UNSC</h1>
          <UNSC />
          <h1>Covenant</h1>
          <Covenant />
          <h1>Promethean</h1>
          <Promethean />
        </div>
      </div>
    );
  }
}
export default App;
