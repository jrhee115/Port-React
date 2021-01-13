import React from "react"
import './App.css';
import Navbar from "../src/components/Navbar"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./components/pages/Home"
import Portfolios from "./components/pages/Portfolios";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component = {Home}/>
        <Route path ="/portfolio" component = {Portfolios} />
        <Route path ="/project" component = {Projects} />
        <Route path ="/about" component = {About} />
      </Switch>
    </Router>
  );
}

export default App;
