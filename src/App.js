import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Products from './components/Pages/Products';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="d-flex flex-column sticky-footer-wrapper">
        <header>
          <Navigation />
        </header>
        <main>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/About' component={About}></Route>
          <Route exact path='/Products' component={Products}></Route>
          </main>
        <footer>
         <Footer/>
        </footer>
      </div>
    )
  }
}

export default App;
