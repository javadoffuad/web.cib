import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CirclePicker } from 'react-color'

import Header from 'components/Header';
import NewCardItem from 'components/NewCardItem';
import { createCard } from 'actions/cardActions';

const colors = [
    "#f44336", "#e91e63", "#9c27b0", "#673ab7",
    "#3f51b5", "#2196f3", "#03a9f4", "#607d8b",
    "#009688", "#4caf50", "#ff5722", "#795548"];

class NewCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            card: {
                title: null,
                color: '',
                expiry: null,
                number: '0965',
                type: 'vs',
                cvc: null
            }
        }
    }

    componentWillMount() {
        this.handleProperty({name: "color", value: colors[0]});
    }

    handleCard() {
        this.props.dispatch(createCard(this.state.card));
    }

    handleChangeColor = (color, event) => {
        this.handleProperty({name: "color", value: color.hex});
    };

    handleProperty(property) {
        let newState = this.state.card;

        newState = Object.assign({}, this.state.card, {
            [property.name]: property.value
        })
        this.setState({
            card: newState
        }, () => console.log("handle property", property.value, this.state.card))
    }

    render() {

        const { cards } = this.props;

        return (
            <div className="pane" style={{flex: 1}}>
                <div className="pane pane-main">
                    <Header title="Новая карта" />
                    <div className="pane pane-body">
                        <div className="pane pane-newcard" id="primary_block">
                            <div id="newcard-form">
                                <div className="pane newcard-info-block">
                                    <div className="pane newcard-txt">
                                        <h2 className="pane title">Ввести карточную информацию</h2>
                                        <div className="pane desc-txt">
                                            <p>Количество карт неограниченно.</p>
                                            <p>Можно добавить желаемое число карт. <a href="https://cib.az#bl1-f">Подробная информация</a></p>
                                        </div>
                                    </div>
                                    <NewCardItem
                                        handleProperty={(property) => this.handleProperty(property)}
                                        {...this.state.card}/>
                                </div>
                                
                                <div id="palette-block" className="pane newcard-info-block picker-width">
                                    <div className="pane newcard-txt">
                                        <h2 className="pane title">Цвет карты</h2>
                                        <div className="picker">
                                            <CirclePicker
                                                color={this.state.card.color}
                                                colors={colors}
                                                onChange={ this.handleChangeColor }/>
                                        </div>
                                    </div>
                                    <div className="pane buttons">
                                        <div className="fields field-button">
                                            <div className="field">
                                                {
                                                    cards.isFetching
                                                    ? <button disabled className="btn primary">Сохраняется...</button>
                                                    : <button onClick={() => this.handleCard()} className="btn primary">Сохранить карту</button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        cards: state.cards
    }
})(NewCard);