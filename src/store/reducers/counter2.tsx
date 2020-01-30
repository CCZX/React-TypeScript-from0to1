import *  as types from '../action-types';
import { AnyAction } from 'redux';
export interface Counter2State {
    number: number
}
let initialState: Counter2State = {
    number: 0
}
export default function (state: Counter2State = initialState, action: AnyAction): Counter2State {
    switch (action.type) {
        case types.ADD2:
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