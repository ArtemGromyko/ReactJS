import React from 'react'
import styles from './card.module.css'

function Card(props) {
    return (
        <div className={styles.Card}>
            <h2 className={styles.H1}>Caption</h2>
            <p>Hello world</p>            
        </div>);
}

export default Card;