import React, { Component } from 'react'
import { BrowserRouter as Router , Route,Switch } from 'react-router-dom'
 
import Home from './components/home';
import Login from './components/login';


export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch> {/**exact加上这个属性，路径就不会错 */}
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
        
      </Router>
    )
  }
}

