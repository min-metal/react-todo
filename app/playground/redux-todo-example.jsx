var redux = require('redux');
var moment = require('moment');

console.log('Starting redux example');

const stateDefault = {
    todos: [],
    showCompleted: false,
    searchText: ''
};
var oldReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'CHANGE_SHOW_COMPLETED' : {
            return {
                ...state,
                showCompleted: action.completed
            }
        }
        case 'CHANGE_SEARCH_TEXT' : {
            return {
                ...state,
                searchText: action.searchText
            }
        }
        case 'ADD_TODO' : {
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        }
        case 'REMOVE_TODO' : {
            var newTodos = state.todos.filter((ele) => ele.id !== action.id);

            return {
                ...state,
                todos: newTodos
            }
        }

        default: {
            return state;
        }
    }
};

// `state` is actually state.showCompleted, it is not the actual state object
// each of these reducers only care about one specific item in our store
var completedReducer = (state = false, action) => {
    switch (action.type) {
        case 'CHANGE_SHOW_COMPLETED' : {
            return action.completed
        }
        default: {
            return state;
        }
    }
};

var searchTextReducer = (searchText = '', action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT' : {
            return action.searchText
        }
        default: {
            return searchText;
        }
    }
};

var todosReducer = (todos = [], action) => {
    switch (action.type) {
        case 'ADD_TODO' : {
            return [...todos, action.todo]
        }
        case 'REMOVE_TODO' : {
            return todos.filter((ele) => ele.id !== action.id);
        }
        default: {
            return todos;
        }
    }
};

var reducer = redux.combineReducers({
    showCompleted: completedReducer,
    searchText: searchTextReducer,
    todos: todosReducer,
});
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension? window.devToolsExtension() : f => f
));

// subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    console.log(state);
});
// unsubscribe();


/** running */
store.dispatch({
    type: 'CHANGE_SHOW_COMPLETED',
    completed: true
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Hello'
});

store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: '1',
        text: 'hello',
        completed: false,
        timeCreated: moment().unix(),
        timeCompleted: undefined
    }
});

store.dispatch({
    type: 'ADD_TODO',
    todo: {
        id: '2',
        text: 'there',
        completed: false,
        timeCreated: moment().unix(),
        timeCompleted: undefined
    }
});

store.dispatch({
    type: 'REMOVE_TODO',
    id: '1'
});


