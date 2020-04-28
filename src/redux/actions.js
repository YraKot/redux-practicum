import { INCREMENT, DECREMENT, ASYNC_INCREMENT, CHANGE_THEME, ENABLE_BTN, DISABLED_BTN } from './types';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}

export function asyncIncrement() {
    return function(dispatch) {
        dispatch(disable());
        setTimeout(() => {
            dispatch({type: ASYNC_INCREMENT});
            dispatch(enable())
        }, 1000)
    }
}

export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme 
    }
}

export function enable() {
    return {
        type: ENABLE_BTN
    }
}
export function disable() {
    return {
        type: DISABLED_BTN 
    }
}