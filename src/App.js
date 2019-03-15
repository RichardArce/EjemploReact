import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Products from './components/Pages/Products';
import {Route} from 'react-router-dom';
  


//import { datos } from './datos.json';
class App extends Component {

  /*constructor() {
    super();
    this.state = {
      datos
    }
  }*/
  render() {
    /*   var tareas = this.state.datos;
  
      const cards = tareas.map((tarea, i) => {
        return (
          <div className="card" key={tarea.title}>
            {tarea.title}
          </div>
  
        )
      }) */
    //{cards}
    return (
      <div className="Container">
        <header>
          <Navigation />
        </header>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/About' component={About}></Route>
          <Route exact path='/Products' component={Products}></Route>
        <footer>
          <Footer/>
        </footer>
      </div>
    )
  }
}

export default App;
