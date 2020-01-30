import * as types from './../action-types'
import { AnyAction } from 'redux'

export interface Counter1State {
  number: number
}

const initialState: Counter1State = {
  number: 0
}

export default function (state:Counter1State = initialState, action: AnyAction) {
  switch (action.type) {
    case types.ADD1:
      return {number: state.number + action.payload}   
    default:
      return state
  }
}
