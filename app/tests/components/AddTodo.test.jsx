var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('../../components/TodoList');
var Todo = require('../../components/Todo');
import DefaultAddTodo, {AddTodo} from '../../components/AddTodo';

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onNewTodo if valid data', () => {
        var spy = expect.createSpy();

        var addTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoInput.value = 'New Todo';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith('New Todo');

    });

    it('should not call onNewTodo if invalid data', () => {
        var spy = expect.createSpy();

        var addTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoInput.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();

    })
});