import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReviewsIndex from './containers/reviews_index';
import ReviewsShow from './containers/reviews_show';
import ReviewsNew from './containers/reviews_new';
import About from './components/about';
import Menu from './components/menu';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
        <Menu />
        <Switch>
          <Route exact path='/reviews/new' component={ReviewsNew} />
          <Route exact path='/reviews/:id' component={ReviewsShow} />
          <Route exact path='/' component={ReviewsIndex} />
          <Route exact path='/about' component={About} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
