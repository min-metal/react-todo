var React = require('react');
const {connect} = require('react-redux');
var moment = require('moment');

import * as actions from '../actions/actions';

export const Todo = React.createClass({
    propTypes: {
        id: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired,
        timeCreated: React.PropTypes.number,
        timeCompleted: React.PropTypes.number
    },
    handleOnCompletedChange: function() {
        let {id, dispatch, onToggleTodo} = this.props;
        // dispatch(actions.toggleTodoCompleted(id));
        onToggleTodo(id);
    },
    render: function () {
        const {text, completed, timeCreated, timeCompleted} = this.props;
        const todoClassname = completed? 'todo todo-completed' : 'todo';

        const renderDate = () => {
            var message = completed? 'Completed ' : 'Created ';
            var timeStamp = completed? timeCompleted : timeCreated;

            return message + moment.unix(timeStamp).format('Do MMM YYYY @ hh:mm a')
        };
        return (
            <div className={todoClassname} onClick={this.handleOnCompletedChange}>
                <div>
                    <input type="checkbox" checked={completed} onChange={f=>f}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderDate()}</p>
                </div>
            </div>
        )
    }
});

/** gives us `dispatch` */
export default connect(
    (state) => state,
    (dispatch) => {
        return {
            onToggleTodo: (id) => {
                dispatch(actions.toggleTodoCompleted(id));
            }
        }
    }
)(Todo);
