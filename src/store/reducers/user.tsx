import *  as types from '../action-types';
import { AnyAction } from 'redux';
import { User } from '../../typings/api';
export interface UserState {
    list: Array<User>
}
let initialState: UserState = {
    list: []
}
export default function (state: UserState = initialState, action: AnyAction): UserState {
    switch (action.type) {
        case types.SET_USER_LIST:
            return { list: action.payload };
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