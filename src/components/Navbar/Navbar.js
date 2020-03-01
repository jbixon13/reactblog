import React, { Component } from 'react'
import styles from './Navbar.module.scss'
import logo from './logo.png'

class Navbar extends Component {
    render() {
        return(
            <div className={styles.Navbar}>
                <header>
                    <a href='/'>
                        <img src={logo} alt='homepage logo'></img>
                    </a>
                    <div className={styles.links}>
                        <a href='/'>Home</a>
                        <a href='/about'>About</a>
                        <a href='https://www.jasonbixon.netlify.com/portfolio'>Portfolio</a>
                        <a href='/contact'>Contact</a>
                    </div>
                </header>
            </div>
        );
    }
}

export default Navbar;