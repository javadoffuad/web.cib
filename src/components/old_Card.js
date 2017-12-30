import React from 'react';

export default (props) => {
    return  (<div className="pane flipper" data-id="3D0C5A95C4E047B1A960A86689168066">
                <div className="back pane card" style={{backgroundColor: props.color}}>
                    <div className="pane card-info">
                        <div className="pane card-name-logo">
                            <div className="pane card-name name">
                                <div className="name-input">
                                    <span className="txt">{props.title}</span>
                                    <input type="text" placeholder="Имя карты" className="hide-field inactive" />
                                </div>
                            </div>
                            <div className="pane card-logo vs"></div>
                        </div>
                        <div className="pane card-number picker-width">
                            <div className="picker">
                            <div id="line" className="line" title="Изменить цвет">
                                <div id="arrows" className="arrows">
                                    <div className="left_arrow"></div>
                                </div>
                            </div>
                            </div>
                            <div className="num">8989</div>
                            <div className="num">88**</div>
                            <div className="num">****</div>
                            <div className="num">9999</div>
                        </div>
                        <div className="pane card-amount">_</div>
                    </div>
                    <div className="pane card-buttons">
                        <a data-id="transfer" className="pane card-btn transfer-button">
                            <i className="icon"></i>
                            <span>Перевод</span>
                        </a>
                        <a data-id="payment" className="pane card-btn payment-button">
                            <i className="icon"></i>
                            <span>Платеж</span>
                        </a>
                        <a data-id="statement" className="pane card-btn statement-button">
                            <i className="icon"></i>
                            <span>Выписка</span>
                        </a>
                        <a data-id="info" className="pane card-btn info-button">
                            <i className="icon"></i>
                            <span>Инфо</span>
                        </a>
                    </div>
                </div>
                <div className="front pane card" style={{backgroundColor: props.color}}>
                    <div className="pane card-info">
                        <div className="pane card-name-logo">
                            <div className="pane card-name name"><span className="txt">{props.title}</span></div>
                            <div className="pane card-logo vs"></div>
                        </div>
                        <div className="pane card-number">
                            <div className="num">8989</div>
                            <div className="num">88**</div>
                            <div className="num">****</div>
                            <div className="num">9999</div>
                        </div>
                    </div>
                </div>
            </div>)
}