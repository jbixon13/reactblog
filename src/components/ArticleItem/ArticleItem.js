import React, { Component } from 'react';
import styles from './ArticleItem.module.scss';
import { Link } from 'react-router-dom';

export class ArticleItem extends Component {
    render() {
        return (
            <div className={styles.ArticleItem}>
                <div className={styles.metadata}>
                    <div className={styles.publishedDate}>
                        { this.props.article.date }
                    </div>
                    <div className={styles.tags}>
                        { this.props.article.tags.map((tag) => {
                            return (
                            <p className={styles.tag}>
                                {tag}
                            </p>
                            )
                        })}
                    </div>
                </div>
                <Link to={ this.props.article.link }>
                    <div className={styles.thumbnail}>
                        <img src={ process.env.PUBLIC_URL + this.props.article.preview } alt={'article preview'} />
                    </div>
                    <div className={styles.description}>
                        <h2 className={styles.title}>
                            { this.props.article.title }
                        </h2>
                        <p className={styles.abstract}>
                            { this.props.article.subtitle }
                        </p>
                    </div>
                </Link>
            </div>
        )
    }
}

export default ArticleItem
