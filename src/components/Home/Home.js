import React, { Component } from 'react';
import styles from './Home.module.scss';
import ArticleList from '../ArticleList/ArticleList';

class Home extends Component {    

  // fetch hello world from mario API and return in console
  componentDidMount () {
    fetch('https://mario-plumber.herokuapp.com/hello/world')
    .then(res => {
      return res.json();
    })
    .then(api => {
      console.log(api)
    })
    .catch(err => {
      console.error(err)
    });
  }

    state = {
        articles: [
          {
            id: 1,
            title: '3D Terrain in Deck.gl',
            subtitle: 'Experimental 3D tiles are fun.',
            date: '3/03/2020',
            preview: '/previews/terrain-map.gif',
            link: '/articles/deck-terrain',
            tags: ['Mapping', 'Deck.gl']
          },
          {
            id: 2,
            title: 'Learning DevOps, Unfortunately',
            subtitle: 'Accepting my fate and building robust software.',
            date: '10/26/2019',
            preview: '/previews/learning-devops.png',
            link: '/articles/learning-devops',
            tags: ['Web', 'Docker']
          },              
          {
            id: 3,
            title: 'Mapping Cyclist Safety in New York City',
            subtitle: 'Is there a relationship between bike path access and cyclist injuries?',
            date: '9/11/2019',
            preview: '/previews/cyclist-safety.gif',
            link: '/articles/cyclist-safety',
            tags: ['Transit', 'sf']
          },                       
          {
            id: 4,
            title: 'Year One in Review',
            subtitle: 'A reflection on my first year (and change) in the real world.',
            date: '8/04/2019',
            preview: '/previews/year-one.png',
            link: '/articles/year-one',
            tags: ['Career']
          },     
          {
            id: 5,
            title: 'MTA Doom and Gloom',
            subtitle: 'Is the subway system as dire as we say it is?',
            date: '4/14/2019',
            preview: '/previews/mta-doom-gloom.gif',
            link: '/articles/MTA-doom-gloom',
            tags: ['Transit', 'Plotly']

          },
          {
            id: 6,
            title: 'Shiny is Cool as Hell',
            subtitle: 'A surprisingly intuitive tool for data democratization.',
            date: '4/2/2019',
            preview: '/previews/shiny-is-cool.jpg',
            link: '/articles/shiny-cool',
            tags: ['Web', 'Shiny']

    
          },
          {
            id: 7,
            title: 'New Year, New (First) Blog',
            subtitle: 'Trying my best.',
            date: '1/24/2019',
            preview: '/previews/new-blog.jpg',
            link: '/articles/new-blog',
            tags: ['Career']
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
