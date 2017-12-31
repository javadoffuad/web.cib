import * as types from './actionTypes';

function createCardRequest() {
    return {
        type: types.ADD_CARD_REQUEST
    }
}

function createCardSuccess(card) {
    return {
        type: types.ADD_CARD_SUCCESS,
        payload: card
    }
}

export function createCard(card) {
    return function(dispatch) {
        dispatch(createCardRequest())

        setTimeout(() => {
            dispatch(createCardSuccess(card))
        }, 1000)
    }
}