import React from 'react';

import Header from 'components/Header';

export default () => {
    return (
        <div className="pane" style={{flex: 1}}>
            <div className="pane pane-main">
                <Header title="New card" />
                <div className="pane pane-body">
                <div class="pane pane-newcard" id="primary_block">
                    <div id="newcard-form">
                        <div class="pane newcard-info-block">
                            <div class="pane newcard-txt">
                                <h2 class="pane title">Ввести карточную информацию</h2>
                                <div class="pane desc-txt">
                                <p>Количество карт неограниченно.</p>
                                <p>Можно добавить желаемое число карт. <a href="https://cib.az#bl1-f">Подробная информация</a></p>
                                </div>
                            </div>
                            <div class="pane newcard-sprite">
                                <div class="pane newcard card-front" id="cardfront" style={{backgroundColor: "rgb(138, 190, 107)", margin: "0px 0px 0px 55px"}}>
                                <div class="pane input-sprite multiple">
                                    <div class="input-block">
                                        <div class="tooltip" data-pos="top-left">Номер карты (только цифры)</div>
                                        <input type="tel" placeholder="0000" maxlength="4" id="pan1" data-next="pan2" tabindex="1" autocomplete="off" />
                                    </div>
                                    <div class="input-block">
                                        <div class="tooltip" data-pos="top-left">Номер карты (только цифры)</div>
                                        <input type="tel" placeholder="0000" maxlength="4" id="pan2" data-next="pan3" data-prev="pan1" tabindex="2" autocomplete="off" />
                                    </div>
                                    <div class="input-block">
                                        <div class="tooltip" data-pos="top-left">Номер карты (только цифры)</div>
                                        <input type="tel" placeholder="0000" maxlength="4" id="pan3" data-next="pan4" data-prev="pan2" tabindex="3" autocomplete="off" />
                                    </div>
                                    <div class="input-block">
                                        <div class="tooltip" data-pos="top-left">Номер карты (только цифры)</div>
                                        <input type="tel" placeholder="0000" maxlength="4" id="pan4" data-next="expiry" data-prev="pan3" tabindex="4" autocomplete="off" />
                                    </div>
                                </div>
                                <div class="pane input-sprite right">
                                    <div class="input-block expry-block">
                                        <div class="tooltip" data-pos="top-left">Срок действия (10/12)</div>
                                        <input type="tel" placeholder="00/00" maxlength="5" id="expiry" data-next="cvv" data-prev="pan4" tabindex="5" autocomplete="off" />
                                    </div>
                                </div>
                                <div class="pane input-sprite">
                                    <div class="input-block">
                                        <div class="tooltip" data-pos="top-left">Имя карты</div>
                                        <input class="name" type="text" placeholder="Имя карты" id="cardname" data-prev="cvv" tabindex="7" autocomplete="off" />
                                    </div>
                                </div>
                                </div>
                                <div class="pane newcard card-back" id="cardback" style={{backgroundColor: "rgb(138, 190, 107)", left: "55px"}}>
                                <div class="pane magnetic-strip"></div>
                                <div class="pane input-sprite right">
                                    <div class="input-block cvv-block">
                                        <div class="tooltip" data-pos="top-left">Card cvv</div>
                                        <input type="tel" placeholder="CVV" maxlength="3" id="cvv" data-next="cardname" data-prev="expiry" tabindex="6" autocomplete="off" />
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div id="palette-block" class="pane newcard-info-block picker-width">
                            <div class="pane newcard-txt">
                                <h2 class="pane title">Цвет карты</h2>
                            </div>

                            <div class="pane buttons">
                                <div class="fields field-button">
                                <div class="field">
                                    <button id="cardAdd" class="btn primary">Добавить карту</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}