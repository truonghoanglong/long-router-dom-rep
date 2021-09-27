import React from 'react';
import Header from './Components/Header'
import Section from './Components/Section'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render(){
    return(
      <Router>
        <>
          <Header />
          <Section />
        </>
      </Router>
    )
  }
}

export default App;
