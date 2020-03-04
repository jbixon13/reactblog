import React, { Component } from 'react';
import styles from './NewBlog.module.scss';
import ArticleHeader from '../../ArticleHeader';
import ArticleContainer from '../../ArticleContainer';

export class NewBlog extends Component {
    render() {
        return (
            <div className={styles.NewBlog}> 
                <ArticleContainer>
                    <ArticleHeader>
                        <h1>New Year, New Blog</h1>
                        <p>Subtitle here</p>
                        <p>Date here</p>
                    </ArticleHeader>   
                <p>hello from inside the container</p>
                </ArticleContainer>
            </div>
        )
    }
}

export default NewBlog
