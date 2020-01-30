import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { LocationDescriptorObject, LocationState  } from 'history'
import { push } from 'connected-react-router'
import * as types from './../store/action-types'
import { CombinedState } from './../store/reducer'
import { Counter1State } from './../store/reducer/counter1'

const mapState = (state: CombinedState): Counter1State => state.counter1
const mapDispatch = (dispatch: Dispatch) => ({
  add(amount: number = 1) {
    dispatch({type: types.ADD1, payload: amount})
  },
  goto(location: LocationDescriptorObject) {
    dispatch(push(location))
  }
})

type IProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>

// interface IProps {
//   number: number
// }

class Counter1 extends Component<IProps, any> {
  render() {
    console.log(this.props)
    const { number } = this.props
    return (
      <div>
        Counter1----{number}
        <button onClick={() => this.props.add(5)}>+</button>
        <button onClick={() => this.props.goto({pathname: '/counter2'})}>jump to counter2</button>
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(Counter1)
