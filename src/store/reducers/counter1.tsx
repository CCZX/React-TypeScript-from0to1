import *  as types from '../action-types';
import { AnyAction } from 'redux';
export interface Counter1State {
    number: number
}
let initialState: Counter1State = {
    number: 0
}
export default function (state: Counter1State = initialState, action: AnyAction): Counter1State {
    switch (action.type) {
        case types.ADD1:
            return { number: state.number + (action.payload || 1) };
        default:
            return state;
    }
}

/* export interface Action<T = any> {
    type: T
}
export interface AnyAction extends Action {
    [extraProps: string]: any
} */