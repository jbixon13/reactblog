import React, { Component } from 'react';
import styles from './Home.module.scss';
import ArticleList from '../ArticleList/ArticleList';

class Home extends Component {    

    state = {
        articles: [
          {
            id: 1,
            title: 'MTA Doom and Gloom',
            subtitle: 'Is the subway system as dire as we say it is?',
            date: '4/14/2019',
            preview: '/previews/mta-doom-gloom.gif',
            link: '/articles/MTA-doom-gloom'
          },
          {
            id: 2,
            title: 'Shiny is Cool as Hell',
            subtitle: 'A surprisingly intuitive tool for data democratization.',
            date: '4/2/2019',
            preview: '/previews/shiny-is-cool.jpg',
            link: '/articles/shiny-cool'
    
          },
          {
            id: 3,
            title: 'New Year, New (First) Blog',
            subtitle: 'Trying my best.',
            date: '1/24/2019',
            preview: '/previews/new-blog.jpg',
            link: '/articles/new-blog'
          }
        ]
      }  

  render() {
    return (
        <div className={styles.Home}>
          <div className={styles.ArticleList}>
            <ArticleList articles={this.state.articles} />
          </div>
        </div>
    );

  }
}

export default Home;
