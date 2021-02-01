import React from 'react';
import styles from './card.module.css';
import classNames from 'classnames';
import { BsPencilSquare } from 'react-icons/bs';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            captionValue: 'caption',
            textValue: 'hello world',
            currentCaptionValue: 'caption',
            currentTextValue: 'hello world',
            checked: false,
            display: true,
        };
        this.StyleChangeHandler = this.StyleChangeHandler.bind(this);
        this.DisplayStateChangeHandler = this.DisplayStateChangeHandler.bind(
            this,
        );
        this.CaptionChangeHandler = this.CaptionChangeHandler.bind(this);
        this.TextChangeHandler = this.TextChangeHandler.bind(this);
        this.ChangeSaveHandler = this.ChangeSaveHandler.bind(this);
    }

    StyleChangeHandler() {
        this.setState({ checked: !this.state.checked });
    }

    DisplayStateChangeHandler() {
        this.setState({ display: !this.state.display });
        this.setState({ currentCaptionValue: this.state.captionValue });
        this.setState({ currentTextValue: this.state.textValue });
        this.setState({ checked: false });
    }

    CaptionChangeHandler(event) {
        this.setState({ currentCaptionValue: event.target.value });
    }

    TextChangeHandler(event) {
        this.setState({ currentTextValue: event.target.value });
    }

    ChangeSaveHandler() {
        this.setState({ captionValue: this.state.currentCaptionValue });
        this.setState({ textValue: this.state.currentTextValue });
        this.DisplayStateChangeHandler();
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
                {this.state.display ? (
                    <>
                        <input
                            type="checkbox"
                            onChange={this.StyleChangeHandler}
                        />
                        <button onClick={this.DisplayStateChangeHandler}>
                            <BsPencilSquare />
                        </button>
                        <h2 className={styles.CardCaption}>
                            {this.state.captionValue}
                        </h2>
                        <p>{this.state.textValue}</p>
                    </>
                ) : (
                    <>
                        <button onClick={this.ChangeSaveHandler}>Save</button>
                        <button onClick={this.DisplayStateChangeHandler}>
                            Discard
                        </button>
                        <br />
                        <br />
                        <input
                            type="text"
                            value={this.state.currentCaptionValue}
                            onChange={this.CaptionChangeHandler}
                            maxLength="10"
                        />
                        <br />
                        <br />
                        <input
                            type="text"
                            value={this.state.currentTextValue}
                            onChange={this.TextChangeHandler}
                            maxLength="50"
                        />
                        <br />
                        <br />
                    </>
                )}
            </div>
        );
    }
}

export default Card;
