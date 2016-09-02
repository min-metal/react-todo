var redux = require('redux');
var thunk = require('redux-thunk').default;
var { completedReducer, searchTextReducer, todosReducer } = require('../reducers/reducers');

export var configure = (initialState = {}) => {
    var reducer = redux.combineReducers({
        showCompleted: completedReducer,
        searchText: searchTextReducer,
        todos: todosReducer,
        // map: mapReducer
    });
    var store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension? window.devToolsExtension() : f => f
    ));

    return store;
};