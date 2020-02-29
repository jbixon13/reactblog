import React, { Component } from 'react'

export class ArticleItem extends Component {
    render() {
        return (
            <div>
                <h1>{ this.props.article.title }</h1>
                <h3>{ this.props.article.subtitle }</h3>
                <p>{ this.props.article.date }</p>
            </div>
        )
    }
}

export default ArticleItem
