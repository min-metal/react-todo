var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';

export var TodoApp = React.createClass({
    // handleNewTodo: function(todoDescription) {
    //     let newTodoItem = {
    //         id: uuid(),
    //         text: todoDescription,
    //         completed: false,
    //         timeCreated: moment().unix(),
    //         timeCompleted: undefined
    //     };
    //
    //     this.setState({
    //         todos: [
    //             ...this.state.todos,
    //             newTodoItem
    //         ]
    //     });
    // },

    // handleToggleTodoCompleted: function(id) {
    //     let updatedTodos = this.state.todos.map((ele) => {
    //         if(ele.id === id) {
    //             ele.completed = !ele.completed;
    //             ele.timeCompleted = ele.completed? moment().unix() : undefined
    //         }
    //         return ele;
    //     });
    //
    //     this.setState({
    //         todos: updatedTodos
    //     });
    // },

    // /**
    //  *
    //  * @param showCompleted {bool}
    //  * @param searchText {string}
    //  */
    // handleOnSearch: function(showCompleted, searchText) {
    //     this.setState({
    //         showCompleted: showCompleted,
    //         searchText: searchText.toLowerCase()
    //     });
    // },

    render: function () {
        return (
            <div>
                <h1 className="page-title">Todo App</h1>

                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-6">
                        <div className="container">
                            <TodoSearch/>
                            <TodoList/>
                            <AddTodo/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

export default TodoApp;