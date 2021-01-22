import React from 'react';
import styles from './card.module.css';

class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            cardStyle: 'CardUnChecked',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState((prevState) => {
            return {
                cardStyle:
                    prevState.cardStyle === 'CardUnChecked'
                        ? 'CardChecked'
                        : 'CardUnChecked',
            };
        });
    }

    render() {
        return (
            <div className={styles[this.state.cardStyle]}>
                <h2 className={styles.CardCaption}>Caption</h2>
                <input type="checkbox" onChange={this.handleChange} />
                <p>Hello world</p>
            </div>
        );
    }
}

export default Card;
