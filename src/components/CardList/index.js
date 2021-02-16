import React from 'react';
import Card from '../Card';
import styled from 'styled-components';

const StyledCheckbox = styled.input`
    cursor: pointer;
    margin: 20px;
    padding: 20px;
`;

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    id: 'card0',
                    caption: 'caption0',
                    text: 'text0',
                    checkbox: false,
                },
                {
                    id: 'card1',
                    caption: 'caption1',
                    text: 'text1',
                    checkbox: false,
                },
                {
                    id: 'card2',
                    caption: 'caption2',
                    text: 'text2',
                    checkbox: false,
                },
                {
                    id: 'card3',
                    caption: 'caption3',
                    text: 'text3',
                    checkbox: false,
                },
                {
                    id: 'card4',
                    caption: 'caption4',
                    text: 'text4',
                    checkbox: false,
                },
                {
                    id: 'card5',
                    caption: 'caption5',
                    text: 'text5',
                    checkbox: false,
                },
                {
                    id: 'card6',
                    caption: 'caption6',
                    text: 'text6',
                    checkbox: false,
                },
                {
                    id: 'card7',
                    caption: 'caption7',
                    text: 'text7',
                    checkbox: false,
                },
            ],
            viewOnly: false,
        };

        this.viewModeChangeHandler = this.viewModeChangeHandler.bind(this);
        this.changeCheckbox = this.changeCheckbox.bind(this);
        this.changeCard = this.changeCard.bind(this);
        this.deleteCardHandler = this.deleteCardHandler.bind(this);
    }

    viewModeChangeHandler() {
        this.setState({
            viewOnly: !this.state.viewOnly,
        });
    }

    changeCheckbox(id) {
        let cardID = this.state.cards.findIndex((card) => card.id === id);
        const draftState = [...this.state.cards];
        draftState[cardID].checkbox = !draftState[cardID].checkbox;
        console.log(draftState);
        this.setState({ cards: draftState });
    }

    changeCard(id, caption, text) {
        let cardID = this.state.cards.findIndex((card) => card.id === id);
        const draftState = [...this.state.cards];
        draftState[cardID].text = text;
        draftState[cardID].caption = caption;
        this.setState({ cards: draftState });
    }

    deleteCardHandler() {
        const filteredCards = this.state.cards.filter((card) => !card.checkbox);
        console.log(filteredCards);
        this.setState({ cards: filteredCards });
    }

    render() {
        return (
            <div>
                <StyledCheckbox
                    type="checkbox"
                    id="viewCheckbox"
                    onChange={this.viewModeChangeHandler}
                />
                <label htmlFor="viewCheckbox">view only</label>
                <br />
                <br />
                <button onClick={this.deleteCardHandler}>
                    delete selected cards
                </button>
                {this.state.cards.map((card) => {
                    return (
                        <Card
                            id={card.id}
                            key={card.id}
                            caption={card.caption}
                            text={card.text}
                            viewOnly={this.state.viewOnly}
                            checkbox={this.state.checkbox}
                            changeCheckboxCallback={this.changeCheckbox}
                            changeCardCallback={this.changeCard}
                        />
                    );
                })}
            </div>
        );
    }
}

export default CardList;
