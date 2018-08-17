import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReviewsIndex from './containers/reviews_index'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' component={ReviewsIndex} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
