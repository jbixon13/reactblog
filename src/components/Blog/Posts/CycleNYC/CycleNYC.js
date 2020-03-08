import React, { Component } from 'react';
import styles from './CycleNYC.module.scss';
import ArticleHeader from '../../ArticleHeader';
import ArticleContainer from '../../ArticleContainer';

export class CycleNYC extends Component {
    render() {
        return (
            <div className={styles.CycleNYC}>
                <ArticleContainer>
                    <ArticleHeader>
                        <h1>Mapping Cyclist Safety in NYC</h1>
                        <p>Subtitle here</p>
                        <p>Date here</p>
                    </ArticleHeader>   
                <p>hello from inside the container</p>
                </ArticleContainer>            
            </div>
        )
    }
}

export default CycleNYC
