import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../../components/Header';
import RightPaneContainer from '../../components/RightPaneContainer';
import Card from '../../components/Card';
import CardControls from '../../components/CardControls';

const cardData = [
    {
        id: 1,
        title: 'AccessBank debit card',
        color: 'rgb(232, 110, 106)',
        pan: '454588******5633',
        balance: 200,
        currency: 'AZN',
        currencyCode: '944',
    },
    {
        id: 2,
        title: 'Expressbank Gold',
        color: 'rgb(94, 116, 186)',
        pan: '886381******6729',
        balance: 100,
        currency: 'AZN',
        currencyCode: '944',
    }
]

export default () => {
    return (
        <div className="pane">
            <div className="pane pane-main">
                <Header title="Cards">
                    <CardControls />
                </Header>
                <div className="pane pane-body">
                    <div className="pane pane-cards ui-sortable">
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
                        items
                    </div>
                </div>
            </RightPaneContainer>
        </div>
    )
}