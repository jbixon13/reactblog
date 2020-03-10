import React, { Component } from 'react';
import styles from './DeckTerrain.module.scss';
import ArticleHeader from '../../ArticleHeader';
import ArticleContainer from '../../ArticleContainer';

export class DeckTerrain extends Component {
    render() {
        return (
            <div className={styles.DeckTerrain}>
                <ArticleContainer>
                    <ArticleHeader>
                        <h1>3D Terrain in Deck.gl</h1>
                        <p>Subtitle here</p>
                        <p>Date here</p>
                    </ArticleHeader>   
                <p>hello from inside the container</p>
                <div classname={styles.testing}>
                    <p>Hello from in the testing div</p>
                </div>
                </ArticleContainer>  
            </div>
        )
    }
}

export default DeckTerrain
