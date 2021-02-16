import React from 'react';
import styles from './card.module.css';
import classNames from 'classnames';
import { BsPencilSquare } from 'react-icons/bs';
import CardHeader from '../CardHeder';
import CardBody from '../CardBody';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        this.props.changeCheckboxCallback(this.props.id);
    }

    displayStateChangeHandler() {
        this.setState({
            display: !this.state.display,
            currentCaptionValue: this.state.currentCaptionValue,
            currentTextValue: this.state.currentTextValue,
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
        this.displayStateChangeHandler();
        this.props.changeCardCallback(
            this.props.id,
            this.state.currentCaptionValue,
            this.state.currentTextValue,
        );
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
                <>
                    {disp ? (
                        <>
                            <input
                                type="checkbox"
                                onChange={this.styleChangeHandler}
                            />
                            {!this.props.viewOnly && (
                                <button
                                    onClick={this.displayStateChangeHandler}>
                                    <BsPencilSquare />
                                </button>
                            )}
                        </>
                    ) : (
                        <>
                            <button onClick={this.changeSaveHandler}>
                                Save
                            </button>
                            <button onClick={this.displayStateChangeHandler}>
                                Discard
                            </button>
                            <br />
                            <br />
                        </>
                    )}
                </>
                <CardHeader
                    caption={this.state.currentCaptionValue}
                    display={this.state.display}
                    captionChangeCallBack={this.captionChangeHandler}
                />
                <CardBody
                    text={this.state.currentTextValue}
                    display={this.state.display}
                    textChangeCallBack={this.textChangeHandler}
                />
            </div>
        );
    }
}

export default Card;
