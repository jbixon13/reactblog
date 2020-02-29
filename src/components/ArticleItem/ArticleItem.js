import React, { Component } from 'react'

require('./ArticleItem.scss');

export class ArticleItem extends Component {
    render() {
        return (
            <div className='ArticleItem'>
                <h2>{ this.props.article.title }</h2>
                <p>{ this.props.article.subtitle }</p>
                <p>{ this.props.article.date }</p>
            </div>
        )
    }
}

export default ArticleItem
