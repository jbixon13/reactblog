import React, { Component } from 'react';
import styles from './YearOne.module.scss';
import ArticleHeader from '../../ArticleHeader';
import ArticleContainer from '../../ArticleContainer';

export class YearOne extends Component {
    render() {
        return (
            <div className={styles.YearOne}>
                <ArticleContainer>
                    <ArticleHeader>
                        <h1>Year One in Review</h1>
                        <p>Subtitle here</p>
                    </ArticleHeader>   
                <p>hello from inside the container</p>
                </ArticleContainer>            
            </div>
        )
    }
}

export default YearOne
