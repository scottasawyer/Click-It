import React from 'react';
import styles from './styles';

const Footer = () => (
    <footer className="page-footer" style={styles.footer}>
        <div className='container'>
            <div className="footer-copyright center">
                <div className="container">
                    <a style={styles.color} href='https://github.com/scottasawyer'>
                        <i class="fab fa-github fa-3x"></i>
                        <p style={styles.color}>scottasawyer</p>© 2018
                    </a>
                </div>
            </div>
        </div>
    </footer >

);

export default Footer;