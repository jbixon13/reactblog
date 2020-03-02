import React, { Component } from 'react';
import styles from './MTADoom.module.scss';
import ArticleHeader from '../../ArticleHeader';

export class MTADoom extends Component {
    render() {
        return (
            <div className={styles.MTADoom}>
                <ArticleHeader/>
            </div>
        )
    }
}

export default MTADoom
