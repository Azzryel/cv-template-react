import React, { Component } from "react";
import GeneralInfo from "./Components/GeneralInfo";
import EducationInfo from "./Components/EducationInfo";
import { PracticalExp } from "./Components/PracticalExp";
import "./styles/reset.css";
import "./styles/App.css";

class App extends Component {

 
  render() {
    return (
      <div id="container">
      <div id="grid">
        <GeneralInfo></GeneralInfo>

        <EducationInfo></EducationInfo>
        
        <PracticalExp></PracticalExp>
      </div>
      </div>
    );
  }
}

export default App;
