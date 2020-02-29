import React, { Component } from 'react'

require('./Footer.scss');

class Footer extends Component {
    render() {
        return(
            <div className='Footer'>
                <footer>
                    <p>Made in Baltimore</p>
                    <p>Design modeled after Distill.pub</p>
                    <p>Artwork attributions are under each item on my portfolio</p>
                </footer>
            </div>
        );
    }
}

export default Footer;