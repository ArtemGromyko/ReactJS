import React from 'react';
import styles from './card.module.css';
import classNames from 'classnames';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({ checked: !this.state.checked });
    }

    render() {
        return (
            <div
                className={
                    styles[
                        classNames(
                            { CardChecked: this.state.checked },
                            { CardUnChecked: !this.state.checked },
                        )
                    ]
                }>
                <h2 className={styles.CardCaption}>Caption</h2>
                <input type="checkbox" onChange={this.handleChange} />
                <p>Hello world</p>
            </div>
        );
    }
}

export default Card;
