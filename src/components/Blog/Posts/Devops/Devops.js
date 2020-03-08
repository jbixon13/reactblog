import React, { Component } from 'react';
import styles from './Devops.module.scss';
import ArticleHeader from '../../ArticleHeader';
import ArticleContainer from '../../ArticleContainer';

export class Devops extends Component {
    render() {
        return (
            <div className={styles.Devops}>
                <ArticleContainer>
                    <ArticleHeader>
                        <h1>Learning DevOps, Unfortunately</h1>
                        <p>Subtitle here</p>
                    </ArticleHeader>   
                <p>hello from inside the container</p>
                </ArticleContainer>            
            </div>
        )
    }
}

export default Devops
