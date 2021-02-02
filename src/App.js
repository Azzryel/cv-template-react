import React, { Component } from "react";
import GeneralInfo from "./Components/GeneralInfo";
import EducationInfo from "./Components/EducationInfo";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();

  }

 
  render() {
    return (
      <div id="container">
      <div id="grid">
        <GeneralInfo></GeneralInfo>

        <EducationInfo></EducationInfo>
      </div>
      </div>
    );
  }
}

export default App;
