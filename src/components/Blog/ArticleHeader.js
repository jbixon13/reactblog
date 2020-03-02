import React, { Component } from 'react';
import styles from './ArticleHeader.module.scss';

export class ArticleHeader extends Component {
    render() {
        return (
            <div className={styles.ArticleHeader}>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default ArticleHeader
