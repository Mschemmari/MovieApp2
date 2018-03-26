import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MovieBox from './components/movieBox/movieBox.js';
import {Switch, Route} from 'react-router-dom'
// views
import Header from './components/layout/navigation/header.js'
import MenuNav from './components/layout/navigation/nav.js'
import Home from './Views/home/index.js'
import Peliculas from './Views/Peliculas/index.js'
//components




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          <MenuNav/>
        </Header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/peliculas' component={Peliculas} />
            {/* <Route path='/about' component={Series} /> */}
            {/* <Route path='/about' component={MiLista} /> */}
            {/* <Route component={NotFound} /> */}
          </Switch>
      </div>

    )
  }
}

export default App;
