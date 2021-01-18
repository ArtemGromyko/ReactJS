import React from 'react'
import Card from '../card/card'
import styles from './task.module.css'

function Task(props) {
    return (
        <div>
            <header className={styles.Header}>
                <h1>This is the header</h1>
            </header>
            <Card/>
        </div>
    );
}

export default Task;