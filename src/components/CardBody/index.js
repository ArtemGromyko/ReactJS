import React from 'react';

class CardBody extends React.Component {
    render() {
        return (
            <>
                {this.props.display ? (
                    <p>{this.props.text}</p>
                ) : (
                    <>
                        <input
                            type="text"
                            value={this.props.text}
                            onChange={this.props.textChangeCallBack}
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

export default CardBody;
