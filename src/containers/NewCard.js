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
                type: null,
                title: null,
                color: '',
                expiry: null,
                number: null
            }
        }
    }

    componentWillMount() {
        this.changeColor(colors[0]);
    }

    handleCard() {
        let card = {
            id: 5,
            bank: 'unibank',
            type: 'vs',
            title: 'Unibank salary',
            number: '0965',
            balance: 80,
            currency: 'AZN',
            currencyCode: '944',
        };

        this.props.dispatch(createCard(card));
    }

    changeColor(color) {
        let newState = this.state.card;

        newState = Object.assign({}, this.state.card, {
            color
        })
        this.setState({
            card: newState
        }, () => console.log("changes", color, this.state.card))
    }

    handleChange = (color, event) => {
        console.log(color)
        this.changeColor(color.hex);
    };

    render() {
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
                                        {...this.state.card}/>
                                </div>
                                
                                <div id="palette-block" className="pane newcard-info-block picker-width">
                                    <div className="pane newcard-txt">
                                        <h2 className="pane title">Цвет карты</h2>
                                        <div className="picker">
                                            <CirclePicker
                                                color={this.state.card.color}
                                                colors={colors}
                                                onChange={ this.handleChange }/>
                                        </div>
                                    </div>
                                    <div className="pane buttons">
                                        <div className="fields field-button">
                                            <div className="field">
                                                <button onClick={() => this.handleCard()} className="btn primary">Сохранить карту</button>
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

const mapStateToProps = state => {
    return {
        ...state
    };
};

export default connect(mapStateToProps)(NewCard);