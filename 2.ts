function createStore(reducer: any) {
    return { getState: 'getState', dispatch: 'dispatch' };//store
}
//store的增强器
function storeEnhancer(createStore: any) {
    return function (...args: any[]) {//返回一个新的createStore
        let store = createStore(...args);
        store.name = 'zhufeng';
        return store;
    }
}
let newCreateStore = storeEnhancer(createStore);
let newStore = newCreateStore(() => { });

