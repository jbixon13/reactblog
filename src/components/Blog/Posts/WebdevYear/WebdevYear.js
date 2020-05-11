import React, { Component } from 'react';
import styles from './WebdevYear.module.scss';
import ArticleHeader from '../../ArticleHeader';
import ArticleContainer from '../../ArticleContainer';

export class WebdevYear extends Component {
    render() {
        return (
            <div className={styles.Devops}>
                <ArticleContainer>
                    <ArticleHeader>
                        <h1>A Year of Web Development</h1>
                        <p>Accepting my fate and building robust software.</p>
                    </ArticleHeader>   
                <p>
                    I have said in the past that sometimes I need to learn things outside of my direct area of interest in order to get better at what does interest me. At the time it was learning web development basics (<code>HTML</code>, <code>CSS</code>) in order to share my analyses with the world and make them more attractive. I have reached another round of this process, and may have even accepted my fate less begrudgingly than previously.
                </p>
                </ArticleContainer>            
            </div>
        )
    }
}

export default WebdevYear
