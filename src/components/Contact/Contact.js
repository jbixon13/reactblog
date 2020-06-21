import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <div className={styles.Contact}>
            <ul>
                <li>
                    <a href='mailto:jbixon13@gmail.com'>
                        <img src={ process.env.PUBLIC_URL + 'contact_logos/email.svg' } alt={'Email link'}/>
                    </a>
                </li>
                <li>
                    <a href='https://www.github.com/jbixon13'>
                        <img src={ process.env.PUBLIC_URL + 'contact_logos/github.svg' } alt={'Github link'}/>
                    </a>
                </li>
                <li>
                    <a href='https://www.twitter.com/bixondata'>
                        <img src={ process.env.PUBLIC_URL + 'contact_logos/twitter.svg' } alt={'Twitter link'}/>
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/jasonbixon'>
                        <img src={ process.env.PUBLIC_URL + 'contact_logos/linkedin.svg' } alt={'LinkedIn link'}/>                    
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Contact