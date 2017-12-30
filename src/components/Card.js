import React from 'react';

export default (props) => {
    const { card, handleCard } = props;
    
    return  <div className="card-wrap">
                {props.active && props.active.id == card.id ? console.log("active", card.title) : console.log("-")}
                <div
                    onClick={() => handleCard(card)}
                    className={`card ${card.bank} ${card.type}` + (props.active && props.active.id == card.id ? ` is-active` : ``) }>
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