import React from 'react';
import Home from '../containers/home';
import About from '../containers/about';
import Contact from '../containers/contact';
import Menu from './menu';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
require('../scss/style.scss');

const App = () => (
    <div>
        <Menu />
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
    </div>
);

export default App;
