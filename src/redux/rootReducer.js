import { INCREMENT, DECREMENT, ASYNC_INCREMENT, CHANGE_THEME, DISABLED_BTN, ENABLE_BTN } from './types';
import { combineReducers } from 'redux';

function counterReducer(state=0, action) {
    if (action.type === INCREMENT) {
        return state + 1;
    } else if (action.type === DECREMENT) {
        return state - 1;
    } else if (action.type === ASYNC_INCREMENT) {
        return state + 1;
    }

    return state;
}

const initialTheme = {
    value: 'white',
    disabled: false
};

function themeReducer(state = initialTheme, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                value: action.payload
            }
        case DISABLED_BTN:
            return {
                ...state, 
                disabled: true
            }
        case ENABLE_BTN:
            return {
                ...state, 
                disabled: false
            }
        default: 
            return state;
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})