import React from 'react';

export default (props) => {
    return  <div className="item" data-id="859804" data-type="DIRECT" data-service="1" data-card="6A82AE9CEDCC443286F7BCA463803736" data-index="odd">
                <div className="txt-center">
                    <div className="template-header">
                        <div className="name" title="Azercell SimSim">{props.title}</div>
                        <div className="amount">
                            <span className="span-amount">{props.amount}</span>
                            <span className="span-currency" data-currency="944">{props.currency}</span>
                        </div>
                    </div>
                    <div className="template-body">
                        <div className="template-desc">
                            <div className="row card-number">
                            <div className="payment__label label-value">{props.code}</div>
                            </div>
                            <div className="row card-number">
                            <div className="payment__label label-name date">{props.createdAt}</div>
                            </div>
                        </div>
                        <div className="repay"><a>Оплатить<i>→</i></a></div>
                    </div>
                </div>
            </div>
}