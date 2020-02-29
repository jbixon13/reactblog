import React, { Component } from 'react'
import logo from './logo.png'

require('./Navbar.scss');

class Navbar extends Component {
    render() {
        return(
            <div className='Navbar'>
                <header>
                    <a href='/'>
                        <img src={logo} alt='homepage logo'></img>
                    </a>
                    <div className='links'>
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