import React, { Component } from 'react';
import styles from './ArticleContainer.module.scss';

export class ArticleContainer extends Component {
    render() {
        return (
            <div className={styles.ArticleContainer}>
                {this.props.children}
            </div>
        )
    }
}

export default ArticleContainer
