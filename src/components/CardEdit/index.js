import React from 'react';
import styles from './cardedit.module.css';

class CardEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            captionValue: props.caption,
            textValue: props.text,
        };

        this.changeCaptionValue = this.changeCaptionValue.bind(this);
        this.changeTextValue = this.changeTextValue.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeCaptionValue(event) {
        const { value, maxLength } = event.target;
        const message = value.slice(0, maxLength);
        this.setState({ captionValue: message });
    }

    changeTextValue(event) {
        const { value, maxLength } = event.target;
        const message = value.slice(0, maxLength);
        this.setState({ textValue: message });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.saveCallBack(this.state.captionValue, this.state.textValue);
    }

    render() {
        return (
            <div className={styles.CardUnChecked}>
                <form>
                    <div>
                        <button onClick={this.handleSubmit}>Save</button>
                        <button onClick={this.props.clickCallBack}>
                            Discard
                        </button>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="text1">Caption:</label>
                            <input
                                type="text"
                                id="text1"
                                value={this.state.captionValue}
                                onChange={this.changeCaptionValue}
                                maxLength="10"
                            />
                        </div>
                        <div>
                            <label htmlFor="text2">Text:</label>
                            <input
                                type="text"
                                id="text2"
                                value={this.state.textValue}
                                onChange={this.changeTextValue}
                                maxLength="50"
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default CardEdit;
