import React, { Component } from 'react';
import styles from './ArticleItem.module.scss';
import { Link } from 'react-router-dom';

export class ArticleItem extends Component {
    render() {
        return (
            <div className={styles.ArticleItem}>
                <Link to={ this.props.article.link }>
                    <h2>{ this.props.article.title }</h2>
                    <p>{ this.props.article.subtitle }</p>
                    <p>{ this.props.article.date }</p>
                    <img src={ process.env.PUBLIC_URL + this.props.article.preview } alt={'article preview'}/>
                </Link>
            </div>
        )
    }
}

export default ArticleItem
