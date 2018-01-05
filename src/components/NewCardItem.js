import React from 'react';
import MaskedInput from 'react-maskedinput';

export default (props) => {

    const { color, handleProperty, handleCardNumber } = props;

    return(
        <div className="pane newcard-sprite">
            <div className="pane newcard card-front" id="cardfront" style={{backgroundColor: `${color}`}}>
                <div className="pane input-sprite multiple">
                    <div className="input-block">
                        <div className="tooltip" data-pos="top-left">Номер карты (только цифры)</div>
                        <MaskedInput
                            onChange={(e) => handleCardNumber(e.target.value, 0)}
                            mask="1111"
                            name="pan1"
                            placeholder="0000"/>
                    </div>
                    <div className="input-block">
                        <div className="tooltip" data-pos="top-left">Номер карты (только цифры)</div>
                        <MaskedInput
                            onChange={(e) => handleCardNumber(e.target.value, 1)}
                            mask="1111"
                            name="pan2"
                            placeholder="0000"/>
                    </div>
                    <div className="input-block">
                        <div className="tooltip" data-pos="top-left">Номер карты (только цифры)</div>
                        <MaskedInput
                            onChange={(e) => handleCardNumber(e.target.value, 2)}
                            mask="1111"
                            name="pan3"
                            placeholder="0000"/>
                    </div>
                    <div className="input-block">
                        <div className="tooltip" data-pos="top-left">Номер карты (только цифры)</div>
                        <MaskedInput
                            onChange={(e) => handleCardNumber(e.target.value, 3)}
                            mask="1111"
                            name="pan4"
                            placeholder="0000"/>
                        {/*<input
                            onChange={(e) => handleCardNumber(e.target.value, 3)}
                            type="tel"
                            placeholder="0000"
                            maxLength="4"
                            tabIndex="4"
                            autoComplete="off" />*/}
                    </div>
                </div>
                <div className="pane input-sprite right">
                    <div className="input-block expry-block">
                        <div className="tooltip" data-pos="top-left">Срок действия (10/12)</div>
                        <MaskedInput
                            onChange={(e) => handleProperty({name: "expiry", value: e.target.value})}
                            mask="11/11"
                            name="cvc"
                            placeholder="00/00"/>
                        {/*<input
                            onChange={(e) => handleProperty({name: "expiry", value: e.target.value})}
                            type="tel"
                            placeholder="00/00"
                            maxLength="5"
                            tabIndex="5"
                            autoComplete="off" />*/}
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
                        <MaskedInput
                            onChange={(e) => handleProperty({name: "cvc", value: e.target.value})}
                            mask="111"
                            name="cvc"
                            placeholder="000"
                            tabIndex="6"/>
                    </div>
                </div>
            </div>
        </div>
    )
}