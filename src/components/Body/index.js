import React from 'react';
import Card from '../Card';
import styles from './body.module.css';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { id: 'card0', caption: 'caption0', text: 'text0' },
                { id: 'card1', caption: 'caption1', text: 'text1' },
                { id: 'card2', caption: 'caption2', text: 'text2' },
                { id: 'card3', caption: 'caption3', text: 'text3' },
                { id: 'card4', caption: 'caption4', text: 'text4' },
                { id: 'card5', caption: 'caption5', text: 'text5' },
                { id: 'card6', caption: 'caption6', text: 'text6' },
                { id: 'card7', caption: 'caption7', text: 'text7' },
            ],
            viewOnly: false,
        };
        this.viewModeChangeHandler = this.viewModeChangeHandler.bind(this);
    }

    viewModeChangeHandler() {
        this.setState({
            viewOnly: !this.state.viewOnly,
        });
    }

    render() {
        return (
            <div>
                <header className={styles.BodyHeader}>
                    <h1>This is the header</h1>
                </header>
                <input
                    type="checkbox"
                    id="viewCheckbox"
                    onChange={this.viewModeChangeHandler}
                />
                <label htmlFor="viewCheckbox">view only</label>
                {this.state.cards.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            caption={card.caption}
                            text={card.text}
                            viewOnly={this.state.viewOnly}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Body;
