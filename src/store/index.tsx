import { createStore, applyMiddleware, StoreEnhancer, StoreEnhancerStoreCreator, Store } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { routerMiddleware } from 'connected-react-router';
import history from '../history';
let storeEnhancer: StoreEnhancer = applyMiddleware(thunk, routerMiddleware(history));
let storeEnhancerStoreCreator: StoreEnhancerStoreCreator = storeEnhancer(createStore);
let store: Store = storeEnhancerStoreCreator(reducer);
export default store;

