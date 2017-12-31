import * as types from "actions/actionTypes"
import initialState from './initialState';

export default (state = initialState.cards, action) => {
    switch (action.type) {
        case types.LOAD_CARD_REQUEST:
            return state
        case types.LOAD_CARD_SUCCESS:
            return state
        case types.LOAD_CARD_FAILURE:
            return state

        case types.ADD_CARD_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            })
        case types.ADD_CARD_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                list: [
                    ...state.list,
                    action.payload
                ]
            })
        case types.ADD_CARD_FAILURE:
            return state
        case types.DELETE_CARD:
            return state
        default:
            return state;
    }
};