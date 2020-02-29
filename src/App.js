import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ArticleList from './components/ArticleList/ArticleList';
import Footer from './components/Footer/Footer';

class App extends Component {
  state = {
    articles: [
      {
        id: 1,
        title: 'Shiny is Cool as Hell',
        subtitle: 'A surprisingly intuitive tool for data democratization.',
        date: '4/2/2019'
      },
      {
        id: 2,
        title: 'New Year, New (First) Blog',
        subtitle: 'Trying my best.',
        date: '1/24/2019'
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <ArticleList articles={this.state.articles} />
        <Footer/>
      </div>
    );

  }
}

export default App;
