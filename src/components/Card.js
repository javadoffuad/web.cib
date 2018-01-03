import React from 'react';

export default (props) => {
    const { card, handleCard } = props;
    
    return  <div className="card-wrap">
                <div
                    style={{backgroundColor: `${card.color}`}}
                    onClick={() => handleCard(card)}
                    className={`card ${card.type}` + (props.active && props.active.id === card.id ? ` is-active` : ``)}>
                    <div className="header" title={card.title}>
                        <span className="logo"></span>
                        <p className="name">{card.title}</p>
                    </div>
                    <div className="footer">
                        <div className="pan">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="number">{card.number}</span>
                        </div>
                    </div>
                </div>
            </div>
}