import React from 'react';
import styles from './card.module.css';
import classNames from 'classnames';
import { BsPencilSquare } from 'react-icons/bs';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            captionValue: props.caption,
            textValue: props.text,
            currentCaptionValue: props.caption,
            currentTextValue: props.text,
            checked: false,
            display: true,
        };
        this.styleChangeHandler = this.styleChangeHandler.bind(this);
        this.displayStateChangeHandler = this.displayStateChangeHandler.bind(
            this,
        );
        this.captionChangeHandler = this.captionChangeHandler.bind(this);
        this.textChangeHandler = this.textChangeHandler.bind(this);
        this.changeSaveHandler = this.changeSaveHandler.bind(this);
    }

    styleChangeHandler() {
        this.setState({ checked: !this.state.checked });
    }

    displayStateChangeHandler() {
        this.setState({
            display: !this.state.display,
            currentCaptionValue: this.state.captionValue,
            currentTextValue: this.state.textValue,
            checked: false,
        });
    }

    componentDidUpdate() {
        if (this.props.viewOnly && !this.state.display)
            this.setState({ display: true });
    }

    captionChangeHandler(event) {
        this.setState({ currentCaptionValue: event.target.value });
    }

    textChangeHandler(event) {
        this.setState({ currentTextValue: event.target.value });
    }

    changeSaveHandler() {
        this.setState({
            captionValue: this.state.currentCaptionValue,
            textValue: this.state.currentTextValue,
        });
        this.displayStateChangeHandler();
    }

    render() {
        let disp =
            this.state.display || (!this.state.display && this.props.viewOnly);
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
                {disp ? (
                    <>
                        <input
                            type="checkbox"
                            onChange={this.styleChangeHandler}
                        />
                        {!this.props.viewOnly && (
                            <button onClick={this.displayStateChangeHandler}>
                                <BsPencilSquare />
                            </button>
                        )}

                        <h2 className={styles.CardCaption}>
                            {this.state.captionValue}
                        </h2>
                        <p>{this.state.textValue}</p>
                    </>
                ) : (
                    <>
                        <button onClick={this.changeSaveHandler}>Save</button>
                        <button onClick={this.displayStateChangeHandler}>
                            Discard
                        </button>
                        <br />
                        <br />
                        <input
                            type="text"
                            value={this.state.currentCaptionValue}
                            onChange={this.captionChangeHandler}
                            maxLength="10"
                        />
                        <br />
                        <br />
                        <input
                            type="text"
                            value={this.state.currentTextValue}
                            onChange={this.textChangeHandler}
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
