import React, { Component } from 'react';
import styles from './NewBlog.module.scss';
import ArticleHeader from '../../ArticleHeader';

export class NewBlog extends Component {
    render() {
        return (
            <div className={styles.NewBlog}>
                <ArticleHeader/>
            </div>
        )
    }
}

export default NewBlog
