var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');
const {connect, Provider} = require('react-redux');

const configureStore = require('../../store/configureStore');

// import TodoList from '../../components/TodoList'
// import Todo from '../../components/Todo'
import DefaultTodoSearch, {TodoSearch} from '../../components/TodoSearch'

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should call props.onChangeSearch when text is entered', () => {
        var spy = expect.createSpy();
        var searchText = 'dog';

        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onChangeSearch={spy}/>);

        todoSearch.refs.todoSearchInput.value = searchText;
        TestUtils.Simulate.change(todoSearch.refs.todoSearchInput);
        expect(spy).toHaveBeenCalledWith(searchText);

    });

    it('should call props.onChangeShowCompletedCheckbox when checkbox is checked', () => {
        var spy = expect.createSpy();

        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onChangeShowCompletedCheckbox={spy}/>);

        todoSearch.refs.showCompletedCheckbox.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompletedCheckbox);
        expect(spy).toHaveBeenCalledWith(true);
    });

    it('should filter the right todos', () => {

    })
});