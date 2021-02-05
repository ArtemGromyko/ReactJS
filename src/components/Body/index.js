import React from 'react';
import CardList from '../CardList';
import styles from './body.module.css';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewOnly: false,
        };
    }

    render() {
        return (
            <div>
                <header className={styles.BodyHeader}>
                    <h1>This is the header</h1>
                </header>
                <CardList />
            </div>
        );
    }
}

export default Body;
