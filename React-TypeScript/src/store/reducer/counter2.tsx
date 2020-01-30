import * as types from './../action-types'
import { AnyAction } from 'redux'

export interface Counter2State {
  number: number
}

const initialState: Counter2State = {
  number: 0
}

export default function (state:Counter2State = initialState, action: AnyAction) {
  switch (action.type) {
    case types.ADD2:
      return {number: state.number + 1}      
    default:
      return state
  }
}
