import React, { Component } from "react";
import GeneralInfo from "./Components/GeneralInfo";
import EducationInfo from "./Components/EducationInfo";

class App extends Component {
  constructor() {
    super();

  }

 
  render() {
    return (
      <div>
        <GeneralInfo></GeneralInfo>

        <EducationInfo></EducationInfo>
      </div>
    );
  }
}

export default App;
