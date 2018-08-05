import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav"
import Body from "./components/Body/Body"
import Tech from "./components/Technologies/Tech"
import Projectsect from "./components/Projects/Projects"
import API from "./utils/API";
// import ProjectGrid from "./components/Projects/Projects"

class App extends Component {
    // Query database for chosen category, and call category change function with category
    getTech = category => {
      // console.log('querying for: ' + category)
      API.getTechnologies(category)
        .then(res =>
          this.handleCategoryChange(res.data)
        )
        .catch(err => console.log(err))
    }


  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Nav/>

        <Body/>

        <Tech/>



        {/* <ProjectGrid/> */}
        <Projectsect/>

              


      </div>
    );
  }
}

export default App;
