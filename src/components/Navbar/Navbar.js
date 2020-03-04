import React, { Component } from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import logo from './logo.png';

class Navbar extends Component {
    render() {
        return(
            <div className={styles.Navbar}>
                <header>
                    <Link to='/'>
                        <img src={logo} alt='homepage logo'></img>
                    </Link>
                    <div className={styles.links}>
                        <ul>
                            <Link to='/'>
                                <li>Home</li>
                            </Link>
                            <Link to='/about'>
                                <li>About</li>
                            </Link>
                            <a href='https://jasonbixon.netlify.com/portfolio/'>
                                <li>Portfolio</li>
                            </a>
                            <Link to='/contact'>
                                <li>Contact</li>
                            </Link>
                        </ul>
                    </div>
                </header>
            </div>
        );
    }
}

export default Navbar;