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
                        <p>I have rebuilt this blog way too many times.</p>
                    </ArticleHeader>   
                    <h3>
                        TLDR
                    </h3>
                    <ul>
                        <li>
                            The form your storytelling with data will take depends on the tools you are competent with and the tradeoffs you are willing to make between low and high level visualization abstractions.
                        </li>
                        <li>
                            The form I’ve tried to emulate is similar to data journalism like The Pudding or NYT Interactives.
                        </li>
                        <li>
                            The R community has done incredible work to bring interactive visualizations to analysts & statisticians that otherwise would have no ability to visualize with the modern web.
                        </li>
                        <li>
                            Who knows where that leads us?
                        </li>
                    </ul>
                    <h3>
                        Getting everything I could out of R
                    </h3>
                    <h3>
                        The long journey from R to React
                    </h3>
                    <h3>
                        Where does that leave us?
                    </h3>
                </ArticleContainer>            
            </div>
        )
    }
}

export default WebdevYear
