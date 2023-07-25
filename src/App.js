import './App.css';
import React from 'react'
import Navbar from './Components/Navbar'; 
import News  from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App =()=> {
   
  
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/"><News key={'General'} pageSize={6} country="in" category="General"/></Route>
            <Route exact path="/business"><News key='Business' pageSize={6} country="in" category="Business"/></Route>
            <Route exact path="/entertainment"><News key='Entertainment' pageSize={6} country="in" category="Entertainment"/></Route>
            <Route exact path="/health"><News key='Health' pageSize={6} country="in" category="Health"/></Route>
            <Route exact path="/science"><News key='Science' pageSize={6} country="in" category="Science"/></Route>
            <Route exact path="/sports"><News key='Sports' pageSize={6} country="in" category="Sports"/></Route>
            <Route exact path="/technology"><News key='Technology' pageSize={6} country="in" category="Technology"/></Route>
          </Switch>
        </Router>
      </div>
    )
  }

  export default App

