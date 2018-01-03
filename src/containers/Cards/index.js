import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from 'components/Header';
import RightPaneContainer from 'components/RightPaneContainer';
import Card from 'components/Card';
import CardControls from 'components/CardControls';
import LatestOperationItem from 'components/LatestOperationItem';

import { CSSTransitionGroup } from 'react-transition-group';

import { latestPaymentData } from 'helpers';

class Cards extends Component {
    state = {
        activeCard: null,
        cardControls: false,
    };

    handleCard(card) {
        let { activeCard } = this.state;
        let self = false;

        if(activeCard && card.id === activeCard.id){
            self = true;
        }

        this.setState({
            activeCard: self ? null : card,
            cardControls: self ? false : true,
        }, () => console.log("active card", this.state.activeCard));
    }

    render() {
        const { cards:{list} } = this.props;

        const options = {
            transitionName: "example",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 0
        }

        return (
            <div className="pane">
                <div className="pane pane-main">
                    <Header title="Карты">
                        <CardControls>
                            <CSSTransitionGroup {...options}>
                            {
                                this.state.cardControls
                                ? <span>
                                    <button id="card-edit" className="menu-item" title="Редактировать карту"><i className="icon icon-edit"></i></button>
                                    <button id="card-delete" className="menu-item" title="Удалить карту"><i className="icon icon-delete"></i></button>
                                </span>
                                : ''
                            }
                            </CSSTransitionGroup>
                            <Link to="/cards/add" id="card-new" className="menu-item" title="Новая карта">
                                <i className="icon icon-new"></i>
                            </Link>
                        </CardControls>
                    </Header>
                    <div className="pane pane-body">
                        <div id="cards" className="pane pane-cards all-cards">
                            {
                                list.map((card, index) =>
                                    <Card
                                        key={index}
                                        handleCard={(card) => this.handleCard(card)}
                                        active={this.state.activeCard}
                                        card={card}/>
                                )
                            }
                            <Link to="/cards/add" className="card-wrap">
                                <div className="card card-new" title="Новая карта">
                                    <div className="card-new__icon"></div>
                                    <span className="card-new__text">Новая карта</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <RightPaneContainer title="Операции">
                    <div className="pane pane-right-fixed">
                        <div className="latest-payment-header">
                            <h2 className="title">Последние платежи</h2>
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

const mapStateToProps = state => {
    return {
        ...state
    };
};

export default connect(mapStateToProps)(Cards);