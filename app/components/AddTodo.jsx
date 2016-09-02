var React = require('react');
const {connect} = require('react-redux');
var uuid = require('node-uuid');
var moment = require('moment');


import * as actions from '../actions/actions';

export var AddTodo = React.createClass({
    propTypes: {
    },
    onSubmit: function(e) {
        e.preventDefault();
        let {dispatch, onNewTodo} = this.props;

        let todoDescription = this.refs.todoInput.value;

        if(typeof todoDescription === 'string' && todoDescription !== '') {
            this.refs.todoInput.value = '';
            // dispatch(actions.addTodo(todoDescription));
            onNewTodo(todoDescription);
        } else {
            this.refs.todoInput.focus();
        }
    },

    render: function () {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.onSubmit}>
                    <input ref="todoInput" type="text" placeholder="What do you need to do?"/>
                    <button className="button expanded hollow">Add Todo</button>
                </form>
            </div>
        );

    }
});

export default connect(
    (state) => state,
    (dispatch) => {
        return {
            onNewTodo: (text) => {
                dispatch(actions.addTodo(text))
            }
        }

    }
)(AddTodo);