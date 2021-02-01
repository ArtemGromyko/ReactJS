import React from 'react';
import Card from '../Card';
import styles from './body.module.css';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
        };
    }

    render() {
        return (
            <div>
                <header className={styles.BodyHeader}>
                    <h1>This is the header</h1>
                </header>
                <Card />
            </div>
        );
    }
}

export default Body;
