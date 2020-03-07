import React, { Component } from 'react';
import styles from './ArticleHeader.module.scss';

export class ArticleHeader extends Component {
    render() {
        return (
            <div className={styles.ArticleHeader}>
                { this.props.children }
            </div>
        )
    }
}

export default ArticleHeader
