import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as types from '../store/action-types';
import { CombinedState } from '../store/reducers';
import { Counter2State } from '../store/reducers/counter2';
let mapStateToProps = (state: CombinedState): Counter2State => state.counter2;
let mapDispatchToProps = (dispatch: Dispatch) => (
    {
        add1(amount: number) {
            dispatch({ type: types.ADD2, payload: amount })
        }
    }
)

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class Counter2 extends Component<Props> {
    render() {
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={() => this.props.add1(5)} >加1</button>
            </div>
        )
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Counter2);