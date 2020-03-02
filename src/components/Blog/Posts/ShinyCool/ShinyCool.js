import React, { Component } from 'react';
import styles from './ShinyCool.module.scss';
import ArticleHeader from '../../ArticleHeader';

export class ShinyCool extends Component {
    render() {
        return (
            <div className={styles.ShinyCool}>
                <ArticleHeader/>
            </div>
        )
    }
}

export default ShinyCool
