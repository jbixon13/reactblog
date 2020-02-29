import React, { Component } from 'react';
import ArticleItem from '../ArticleItem/ArticleItem';

require('./ArticleList.scss');

class ArticleList extends Component {
    render() {
        return this.props.articles.map((article) => (
        <ArticleItem key={article.id} article={article}/>
        ))
    }
}

export default ArticleList;