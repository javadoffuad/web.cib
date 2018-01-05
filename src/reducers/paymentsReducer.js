import * as types from "actions/actionTypes"
import initialState from './initialState';

export default (state = initialState.payments, action) => {
    switch (action.type) {
        case types.LOAD_PAYMENTS_REQUEST:
            return state
        case types.LOAD_PAYMENTS_SUCCESS:
            return state
        case types.LOAD_PAYMENTS_FAILURE:
            return state

        default:
            return state;
    }
};