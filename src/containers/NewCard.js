import React, { Component } from 'react';
import { connect } from 'react-redux'

import Header from 'components/Header';
import { createCard } from 'actions/cardActions';

class NewCard extends Component {
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
                                    <div className="pane newcard-sprite">
                                        <div className="pane newcard card-front" id="cardfront" style={{backgroundColor: "rgb(138, 190, 107)", margin: "0px 0px 0px 55px"}}>
                                        <div className="pane input-sprite multiple">
                                            <div className="input-block">
                                                <div className="tooltip" data-pos="top-left">Номер карты (только цифры)</div>
                                                <input type="tel" placeholder="0000" maxLength="4" id="pan1" data-next="pan2" tabIndex="1" autoComplete="off" />
                                            </div>
                                            <div className="input-block">
                                                <div className="tooltip" data-pos="top-left">Номер карты (только цифры)</div>
                                                <input type="tel" placeholder="0000" maxLength="4" id="pan2" data-next="pan3" data-prev="pan1" tabIndex="2" autoComplete="off" />
                                            </div>
                                            <div className="input-block">
                                                <div className="tooltip" data-pos="top-left">Номер карты (только цифры)</div>
                                                <input type="tel" placeholder="0000" maxLength="4" id="pan3" data-next="pan4" data-prev="pan2" tabIndex="3" autoComplete="off" />
                                            </div>
                                            <div className="input-block">
                                                <div className="tooltip" data-pos="top-left">Номер карты (только цифры)</div>
                                                <input type="tel" placeholder="0000" maxLength="4" id="pan4" data-next="expiry" data-prev="pan3" tabIndex="4" autoComplete="off" />
                                            </div>
                                        </div>
                                        <div className="pane input-sprite right">
                                            <div className="input-block expry-block">
                                                <div className="tooltip" data-pos="top-left">Срок действия (10/12)</div>
                                                <input type="tel" placeholder="00/00" maxLength="5" id="expiry" data-next="cvv" data-prev="pan4" tabIndex="5" autoComplete="off" />
                                            </div>
                                        </div>
                                        <div className="pane input-sprite">
                                            <div className="input-block">
                                                <div className="tooltip" data-pos="top-left">Имя карты</div>
                                                <input className="name" type="text" placeholder="Имя карты" id="cardname" data-prev="cvv" tabIndex="7" autoComplete="off" />
                                            </div>
                                        </div>
                                        </div>
                                        <div className="pane newcard card-back" id="cardback" style={{backgroundColor: "rgb(138, 190, 107)", left: "55px"}}>
                                            <div className="pane magnetic-strip"></div>
                                            <div className="pane input-sprite right">
                                                <div className="input-block cvv-block">
                                                    <div className="tooltip" data-pos="top-left">Card cvv</div>
                                                    <input type="tel" placeholder="CVV" maxLength="3" id="cvv" data-next="cardname" data-prev="expiry" tabIndex="6" autoComplete="off" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="palette-block" className="pane newcard-info-block picker-width">
                                    <div className="pane newcard-txt">
                                        <h2 className="pane title">Цвет карты</h2>
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