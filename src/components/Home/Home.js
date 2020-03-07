import React, { Component } from 'react';
import styles from './Home.module.scss';
import ArticleList from '../ArticleList/ArticleList';

class Home extends Component {    

    state = {
        articles: [
          {
            id: 1,
            title: '3D Terrain in Deck.gl',
            subtitle: 'Experimental 3D tiles are fun.',
            date: '3/03/2020',
            preview: '/previews/mta-doom-gloom.gif',
            link: '/articles/deck-terrain',
            tags: ['Mapping', 'Deck.gl']
          },          
          {
            id: 2,
            title: 'MTA Doom and Gloom',
            subtitle: 'Is the subway system as dire as we say it is?',
            date: '4/14/2019',
            preview: '/previews/mta-doom-gloom.gif',
            link: '/articles/MTA-doom-gloom',
            tags: ['Transit', 'Plotly']

          },
          {
            id: 3,
            title: 'Shiny is Cool as Hell',
            subtitle: 'A surprisingly intuitive tool for data democratization.',
            date: '4/2/2019',
            preview: '/previews/shiny-is-cool.jpg',
            link: '/articles/shiny-cool',
            tags: ['Web', 'Shiny']

    
          },
          {
            id: 4,
            title: 'New Year, New (First) Blog',
            subtitle: 'Trying my best.',
            date: '1/24/2019',
            preview: '/previews/new-blog.jpg',
            link: '/articles/new-blog',
            tags: ['Tag 1', 'Tag 2']
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
