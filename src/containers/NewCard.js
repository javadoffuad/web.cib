import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CirclePicker } from 'react-color'

import Header from 'components/Header';
import { createCard } from 'actions/cardActions';
import NewCardItem from 'components/NewCardItem';

class NewCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            card: {
                type: null,
                title: null,
                color: null,
                expiry: null,
                number: null
            }
        }
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

    render() {
        return (
            <div className="pane" style={{flex: 1}}>
                <div className="pane pane-main">
                    <Header title="New card" />
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
                                    <NewCardItem />
                                </div>
                                
                                <div id="palette-block" className="pane newcard-info-block picker-width">
                                    <div class="pane newcard-txt">
                                        <h2 class="pane title">Цвет карты</h2>
                                        <div className="picker">
                                            <CirclePicker />
                                        </div>
                                    </div>
                                    <div className="pane buttons">
                                        <div className="fields field-button">
                                            <div className="field">
                                                <button onClick={() => this.handleCard()} className="btn primary">Добавить карту</button>
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