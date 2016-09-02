var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');
const {connect, Provider} = require('react-redux');
const moment = require('moment');

const store = require('../../store/configureStore').configure();
var {Todo} = require('../../components/Todo');

describe('Todo', () => {
    it('should exist', () => {
        expect(Todo).toExist();
    });

    // TODO fix timeCompleted thing
    it('should dispatch toggle todo action on click', () => {
        connect()(Todo);
        var spy = expect.createSpy();
        var todoData = {id: '11', text: 'text', completed: false};
        var todo = TestUtils.renderIntoDocument(<Todo onToggleTodo={spy} {...todoData}/>);

        var timeCompleted = moment().unix();

        TestUtils.Simulate.click(ReactDOM.findDOMNode(todo));
        // expect(spy).toHaveBeenCalledWith({
        //     type: 'TOGGLE_TODO_COMPLETED',
        //     id: '11',
        //     time: timeCompleted
        // });
        expect(spy).toHaveBeenCalledWith('11');
    })
});