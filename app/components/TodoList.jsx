var React = require('react');
const {connect} = require('react-redux');
// var Todo = require('./Todo').default;
import Todo from './Todo';
const TodoAPI = require('../api/TodoAPI')
import {toggleTodoCompleted} from '../actions/actions'


export var TodoList = React.createClass({
    render: function () {
        var {todos} = this.props;

        var renderTodos = () => {
            if(todos.length == 0) {
                return <p className="container__message">Nothing to do</p>
            }

            return todos.map((todo) => {
                return <Todo key={todo.id} {...todo}/>
            })
        };

        return (
            <div >
                {renderTodos()}
            </div>
        )
    }
});

const getVisibleTodos = (todos, showCompleted, searchText) => {
    return TodoAPI.filterTodos(todos, showCompleted, searchText);
};


const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodoCompleted(id))
        }
    }
};
export default connect(
    (state) => {
        return {
            todos: getVisibleTodos(state.todos, state.showCompleted, state.searchText)
        }
    },
    // mapDispatchToProps
)(TodoList);