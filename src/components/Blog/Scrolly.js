import React, { Component } from 'react';
import styles from './Scrolly.module.scss';

export class Scrolly extends Component {
    render() {
        return (
            <div className={styles.Scrolly}>
                {this.props.children}
            </div>
        )
    }
}

export default Scrolly
