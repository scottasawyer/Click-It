import React from 'react';
import styles from './styles';

const Nav = props => (
    <nav style={styles.nav}>
        <div className="nav-wrapper">
            <div className='container-fluid'>
                <a href="#!" className="brand-logo center" style={styles.nav}>Final Fantasy Click-It!</a>
                <ul className='right'>
                    <li><a href='#!'>{props.currentScore}</a></li>
                    <li><a href='#!'>{props.topScore}</a></li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Nav;