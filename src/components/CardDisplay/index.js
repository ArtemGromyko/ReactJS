import React from 'react';
import styles from './carddisplay.module.css';
import classNames from 'classnames';
import { BsPencilSquare } from 'react-icons/bs';

class CardDisplay extends React.Component {
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
                <form>
                    <div>
                        <input type="checkbox" onChange={this.handleChange} />
                        <button onClick={this.props.clickCallBack}>
                            <BsPencilSquare />
                        </button>
                    </div>
                    <div>
                        <h2 className={styles.CardCaption}>
                            {this.props.caption}
                        </h2>
                        <p>{this.props.text}</p>
                    </div>
                </form>
            </div>
        );
    }
}

export default CardDisplay;
