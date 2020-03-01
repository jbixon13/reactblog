import React, { Component } from 'react'
import styles from './ArticleItem.module.scss'

export class ArticleItem extends Component {
    render() {
        return (
            <div className={styles.ArticleItem}>
                <h2>{ this.props.article.title }</h2>
                <p>{ this.props.article.subtitle }</p>
                <p>{ this.props.article.date }</p>
                <img src={ process.env.PUBLIC_URL + this.props.article.preview } alt={'article preview'}/>
            </div>
        )
    }
}

export default ArticleItem
