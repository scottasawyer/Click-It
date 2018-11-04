import React from 'react';
import styles from './styles'

const Header = props => (
    <div className='container-fluid header' style={styles.container}>
        <div className='row center'>
            <div className='col l8 offset-l2 s10 offset-s1'>
                <div className='card-horizontal' style={styles.card}>
                    <div className='card-content'>
                        <h2 className='white-text'><span style={styles.header}>Let's keep it simple, just don't click an image twice and you win!</span></h2>
                        <div className='row'>
                            <div className='col s6'>
                                <h4 style={props.currentScore < props.topScore ? styles.score : styles.score}>
                                    <span style={styles.score}>Top Score</span>
                                </h4>
                                <h4 style={props.currentScore < props.topScore ? styles.score : styles.score}>
                                    {props.topScore}
                                </h4>
                            </div>
                            <div className='col s6'>
                            <h4 style={props.currentScore > props.topScore ? styles.score : styles.score}>
                                    <span style={styles.score}>Current Score</span>
                                </h4>
                                <h4 style={props.currentScore > props.topScore ? styles.score : styles.score}>
                                    {props.currentScore}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='row center'>
            <h4 className='grey-text' style={styles.winLose}><span>{props.message}</span></h4>
        </div>
    </div >
);

export default Header;