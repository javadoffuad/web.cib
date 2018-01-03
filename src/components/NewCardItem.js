import React from 'react';

export default (props) => {

    const { color, handleProperty } = props;

    return(
        <div className="pane newcard-sprite">
            <div className="pane newcard card-front" id="cardfront" style={{backgroundColor: `${color}`}}>
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
                        <input
                            onChange={(e) => handleProperty({name: "expiry", value: e.target.value})}
                            type="tel"
                            placeholder="00/00"
                            maxLength="5"
                            tabIndex="5"
                            autoComplete="off" />
                    </div>
                </div>
                <div className="pane input-sprite">
                    <div className="input-block">
                        <div className="tooltip" data-pos="top-left">Имя карты</div>
                        <input  
                            onChange={(e) => handleProperty({name: "title", value: e.target.value})}
                            className="name"
                            type="text"
                            placeholder="Имя карты"
                            tabIndex="7"
                            autoComplete="off" />
                    </div>
                </div>
            </div>
            <div className="pane newcard card-back" id="cardback" style={{backgroundColor: `${color}`}}>
                <div className="pane magnetic-strip"></div>
                <div className="pane input-sprite right">
                    <div className="input-block cvv-block">
                        <div className="tooltip" data-pos="top-left">Card cvv</div>
                        <input
                            onChange={(e) => handleProperty({name: "cvc", value: e.target.value})}
                            type="tel"
                            placeholder="CVV"
                            maxLength="3"
                            tabIndex="6"
                            autoComplete="off" />
                    </div>
                </div>
            </div>
        </div>
    )
}