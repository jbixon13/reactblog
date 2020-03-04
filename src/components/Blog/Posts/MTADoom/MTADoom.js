import React, { Component } from 'react';
import styles from './MTADoom.module.scss';
import ArticleHeader from '../../ArticleHeader';
import ArticleContainer from '../../ArticleContainer';

export class MTADoom extends Component {
    render() {
        return (
            <div className={styles.MTADoom}>
                <ArticleContainer>
                    <ArticleHeader>
                        <h1>MTA Doom and Gloom</h1>
                        <p>Subtitle here</p>
                        <p>Date here</p>
                    </ArticleHeader>   
                <p>hello from inside the container</p>
                </ArticleContainer>            
            </div>
        )
    }
}

export default MTADoom
