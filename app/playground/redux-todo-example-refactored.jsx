var redux = require('redux');
var moment = require('moment');

const actions = require('../actions/actions');
const store = require('../store/configureStore').configure();


// subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    console.log(state);

});

// store.dispatch(actions.fetchLocation());

/** running */
store.dispatch(actions.changeShowCompleted(true));
store.dispatch(actions.changeSearchText('hello'));
store.dispatch(actions.addTodo('1', 'hello', true, moment().unix(), undefined));
store.dispatch(actions.addTodo('2', 'there', false, moment().unix(), undefined));
store.dispatch(actions.removeTodo('1'));
store.dispatch(actions.setTodoCompleted('2', moment().unix()));
store.dispatch(actions.unsetTodoCompleted('2'));


// unsubscribe();
