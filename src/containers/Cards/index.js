import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import RightPaneContainer from 'components/RightPaneContainer';
import Card from 'components/Card';
import CardControls from 'components/CardControls';
import LatestOperationItem from 'components/LatestOperationItem';

import { cardData, latestPaymentData } from 'helpers';

export default class Cards extends Component {
    state = {
        activeCard: null
    };

    handleCard(card) {
        this.setState({
            activeCard: card
        }, () => console.log("card active", this.state.activeCard));
    }

    render() {
        return (
            <div className="pane">
                <div className="pane pane-main">
                    <Header title="Cards">
                        <CardControls>
                            <button id="card-edit" className="menu-item inactive" title="Редактировать карту"><i className="icon icon-edit"></i></button>
                            <button id="card-delete" className="menu-item inactive" title="Удалить карту"><i className="icon icon-delete"></i></button>
                            <Link to="/cards/add" id="card-new" className="menu-item" title="Новая карта">
                                <i className="icon icon-new"></i>
                            </Link>
                        </CardControls>
                    </Header>
                    <div className="pane pane-body">
                        <div id="cards" className="pane pane-cards all-cards">
                            {
                                cardData.map((card, index) =>
                                    <Card
                                        key={index}
                                        handleCard={(card) => this.handleCard(card)}
                                        active={this.state.activeCard}
                                        card={card}/>
                                )
                            }
                            <Link to="cards/add" className="card-wrap">
                                <div className="card card-new" title="Новая карта">
                                    <div className="card-new__icon"></div>
                                    <span className="card-new__text">Новая карта</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <RightPaneContainer title="Operations">
                    <div className="pane pane-right-fixed">
                        <div className="latest-payment-header">
                            <h2 className="title">Last payments</h2>
                        </div>
                    </div>
                    <div id="latest-operation-container" className="pane pane-item-container">
                        <div className="list list-right">
                            {
                                latestPaymentData.map((item, index) =>
                                    <LatestOperationItem key={index} {...item}/>
                                )
                            }
                        </div>
                    </div>
                </RightPaneContainer>
            </div>
        )
    }
}