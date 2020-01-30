import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import reducer from './reducer'
import history from './../history'

const storeEnhancer = applyMiddleware(thunk, routerMiddleware(history))
const storeEnhancerCreator = storeEnhancer(createStore)
const store = storeEnhancerCreator(reducer)

export default store
