import React, { Component } from 'react';
import SideBar from './components/sidebar/sidebar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/home/home';
import Completed from './pages/completed/completed';
import Collections from './pages/collections/collections';
import './App.css';


class App extends Component {
  render() {
    return (

      <Router>
          <SideBar />
          <div className = 'main-panel'>
            <Switch>
              <Route exact path="/">
                  <Redirect to="/home" component = {Home}/>
              </Route>
              <Route path='/home' component={Home} />
              <Route path='/completed' component={Completed} />
            </Switch>
          </div>
      </Router>

    );
  }
}

export default App;