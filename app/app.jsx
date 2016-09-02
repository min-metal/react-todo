var React = require('react');
var ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
const moment = require('moment');

import TodoApp from './components/TodoApp';
// var reduxExample = require('./playground/redux-todo-example-refactored');

const actions = require('./actions/actions');
const store = require('./store/configureStore').configure();
const TodoAPI = require('./api/TodoAPI');

var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    console.log(state);
    TodoAPI.setTodos(state.todos);
});

let initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// store.dispatch(actions.changeShowCompleted(true));
// store.dispatch(actions.changeSearchText('hi'));
// store.dispatch(actions.addTodo('there'));
// store.dispatch(actions.addTodo('hi'));



// Load foundation
$(document).foundation();


// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    // <Router history={hashHistory}>
    //     <Route path="/" component={providedApp()}>
    //
    //     </Route>
    // </Router>,
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);
