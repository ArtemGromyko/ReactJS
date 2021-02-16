import React from 'react';
import styles from './cardHeader.module.css';

class CardHeader extends React.Component {
    render() {
        return (
            <>
                {this.props.display ? (
                    <h2 className={styles.CardCaption}>{this.props.caption}</h2>
                ) : (
                    <>
                        <input
                            type="text"
                            value={this.props.caption}
                            onChange={this.props.captionChangeCallBack}
                            maxLength="10"
                        />
                        <br />
                        <br />
                    </>
                )}
            </>
        );
    }
}

export default CardHeader;
