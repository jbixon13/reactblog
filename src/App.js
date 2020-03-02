import React, { Component } from 'react';
import styles from './App.module.scss';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import MTADoom from './components/Blog/Posts/MTADoom/MTADoom';
import ShinyCool from './components/Blog/Posts/ShinyCool/ShinyCool';
import NewBlog from './components/Blog/Posts/NewBlog/NewBlog';

class App extends Component {

  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Navbar/>   
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/articles/MTA-doom-gloom' component={MTADoom}/>
            <Route path='/articles/shiny-cool' component={ShinyCool}/>
            <Route path='/articles/new-blog' component={NewBlog}/>
          </Switch>          
          <Footer/>       
        </div>
      </Router>
    );

  }
}

export default App;
