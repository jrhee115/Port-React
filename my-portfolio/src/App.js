import './App.css';
import Navbar from "../src/components/Navbar"
import {BroswerRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact />
      </Switch>
    </Router>
  );
}

export default App;