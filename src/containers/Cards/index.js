import React, {Component} from 'react';

import { Link } from 'react-router-dom';

import Header from 'components/Header';
import RightPaneContainer from 'components/RightPaneContainer';
import Card from 'components/Card';
import CardControls from 'components/CardControls';
import LatestOperationItem from 'components/LatestOperationItem';

import { cardData, latestPaymentData } from 'helpers';

export default class Cards extends Component {
    render() {
        return (
            <div className="pane">
                <div className="pane pane-main">
                    <Header title="Cards">
                        <CardControls>
                            <button id="card-edit" className="menu-item inactive" title="Редактировать карту"><i className="icon icon-edit"></i></button>
                            <button id="card-delete" className="menu-item inactive" title="Удалить карту"><i className="icon icon-delete"></i></button>
                            <Link to="/cards/add" id="card-new" className="menu-item" title="Добавить карту">
                                <i className="icon icon-new"></i>
                            </Link>
                        </CardControls>
                    </Header>
                    <div className="pane pane-body">
                        <div id="cards" className="pane pane-cards ui-sortable">
                        {
                            cardData.map((card, index) =>
                                <Card key={index} {...card}/>
                            )
                        }
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