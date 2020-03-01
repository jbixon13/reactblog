import React, { Component } from 'react';
import styles from './App.module.scss';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

class App extends Component {

  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Navbar/>   
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
          </Switch>          
          <Footer/>       
        </div>
      </Router>
    );

  }
}

export default App;
