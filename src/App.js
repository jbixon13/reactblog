import React, { Component } from 'react';
import styles from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import ArticleList from './components/ArticleList/ArticleList';
import Footer from './components/Footer/Footer';

class App extends Component {
  state = {
    articles: [
      {
        id: 1,
        title: 'MTA Doom and Gloom',
        subtitle: 'Is the subway system as dire as we say it is?',
        date: '4/14/2019',
        preview: '/previews/mta-doom-gloom.gif'
      },
      {
        id: 2,
        title: 'Shiny is Cool as Hell',
        subtitle: 'A surprisingly intuitive tool for data democratization.',
        date: '4/2/2019',
        preview: '/previews/shiny-is-cool.jpg'
      },
      {
        id: 3,
        title: 'New Year, New (First) Blog',
        subtitle: 'Trying my best.',
        date: '1/24/2019',
        preview: '/previews/new-blog.jpg'
      }
    ]
  }

  render() {
    return (
      <div className={styles.App}>
        <Navbar/>
        <div className={styles.ArticleList}>
          <ArticleList articles={this.state.articles} />
        </div>
        <Footer/>
      </div>
    );

  }
}

export default App;
