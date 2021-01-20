import React from 'react';
import Card from '../Card';
import styles from './body.module.css';

function Body(props) {
    return (
        <div>
            <header className={styles.BodyHeader}>
                <h1>This is the header</h1>
            </header>
            <Card />
        </div>
    );
}

export default Body;
