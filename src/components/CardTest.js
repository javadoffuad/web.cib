import React from 'react';

import './Card.css'

export default (props) => {
    return  <div className="card-wrap">
                <div className={`card ${props.bank} ${props.type}`}>
                    <div className="header" title={props.title}>
                        <span className="logo"></span>
                        <p className="name">{props.title}</p>
                    </div>
                    <div className="footer">
                        <div className="pan">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="number">{props.number}</span>
                        </div>
                    </div>
                </div>
            </div>
}