var React = require('react');
const {connect} = require('react-redux');
import * as actions from '../actions/actions';

export var TodoSearch = React.createClass({

    handleChangeSearch: function() {
        let {onChangeSearch} = this.props;
        var searchText = this.refs.todoSearchInput.value;

        onChangeSearch(searchText);
    },
    handleChangeShowCompletedCheckbox: function() {
        let {onChangeShowCompletedCheckbox} = this.props;
        var showCompleted = this.refs.showCompletedCheckbox.checked;

        onChangeShowCompletedCheckbox(showCompleted);
    },
    // handleSearch: function() {
    //     var showCompleted = this.refs.showCompletedCheckbox.checked;
    //     var searchText = this.refs.todoSearchInput.value;
    //
    //     this.props.onSearch(showCompleted, searchText);
    // },

    render: function () {
        let {searchText, showCompleted} = this.props;

        return (
            <div className="container__header">
                <div>
                    <input ref="todoSearchInput" type="search" placeholder="Search Todo"
                           onChange={this.handleChangeSearch} defaultValue={searchText} value={searchText}/>
                </div>

                <div>
                    <label>
                        <input ref="showCompletedCheckbox" type="checkbox"
                               onChange={this.handleChangeShowCompletedCheckbox} defaultChecked={showCompleted}
                               checked={showCompleted}/>
                        Show Completed Todo
                    </label>
                </div>
            </div>
        )
    }
});


export default connect(
    (state) => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
        }
    },
    (dispatch) => {
        return {
            onChangeSearch: (searchText) => {
                dispatch(actions.changeSearchText(searchText));
            },
            onChangeShowCompletedCheckbox: (showCompleted) => {
                dispatch(actions.changeShowCompleted(showCompleted));
            },
        }
    }
)(TodoSearch);