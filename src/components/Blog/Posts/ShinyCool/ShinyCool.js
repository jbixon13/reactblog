import React, { Component } from 'react';
import styles from './ShinyCool.module.scss';
import ArticleHeader from '../../ArticleHeader';
import ArticleContainer from '../../ArticleContainer';

export class ShinyCool extends Component {
    render() {
        return (
            <div className={styles.ShinyCool}>
                <ArticleContainer>
                    <ArticleHeader>
                        <h1>Shiny is Cool as Hell</h1>
                        <p>Subtitle here</p>
                        <p>Date here</p>
                    </ArticleHeader>   
                <p>hello from inside the container</p>
                </ArticleContainer>
            </div>
        )
    }
}

export default ShinyCool
