import React from 'react';
import CardDisplay from '../CardDisplay';
import CardEdit from '../CardEdit';
import styles from './body.module.css';

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            caption: 'caption',
            text: 'hello world',
        };

        this.changeDisplayState = this.changeDisplayState.bind(this);
        this.changeValue = this.changeValue.bind(this);
    }

    changeDisplayState() {
        this.setState({ display: !this.state.display });
    }

    changeValue(captionValue, textValue) {
        console.log(captionValue, textValue);
        this.setState({ caption: captionValue });
        this.setState({ text: textValue });
        this.changeDisplayState();
    }

    render() {
        return (
            <div>
                <header className={styles.BodyHeader}>
                    <h1>This is the header</h1>
                </header>
                {this.state.display ? (
                    <CardDisplay
                        clickCallBack={this.changeDisplayState}
                        caption={this.state.caption}
                        text={this.state.text}
                    />
                ) : (
                    <CardEdit
                        saveCallBack={this.changeValue}
                        clickCallBack={this.changeDisplayState}
                        caption={this.state.caption}
                        text={this.state.text}
                    />
                )}
            </div>
        );
    }
}

/*
function Body(props) {
    return (
        <div>
            <header className={styles.BodyHeader}>
                <h1>This is the header</h1>
            </header>
            <Card />
        </div>
    );
}
*/
export default Body;
