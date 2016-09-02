var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');
const {Provider} = require('react-redux');

const configureStore = require('../../store/configureStore');

import DefaultTodoList, {TodoList} from '../../components/TodoList';
import DefaultTodo, {Todo} from '../../components/Todo';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('should render one Todo component for each todo item', () => {
        var todos = [
            {
                id: '1',
                text: 'Walk the dog',
                completed: false,
                timeCompleted: undefined,
                timeCreated: 500
            },
            {
                id: '2',
                text: 'Clean the yard.',
                completed: false,
                timeCompleted: undefined,
                timeCreated: 500
            }
        ];

        let store = configureStore.configure({
            todos: todos
        });
        let provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <DefaultTodoList/>
            </Provider>
        );


        let todoList = TestUtils.scryRenderedComponentsWithType(provider, DefaultTodoList)[0];
        let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, DefaultTodo);

        expect(todosComponents.length).toBe(todos.length);

    });

    it('should render empty message if no todos', () => {
        var todos = [];

        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        var $el = $(ReactDOM.findDOMNode(todoList));

        expect($el.find('.container__message').length).toEqual(1);
    });

    it('should filter the right todos', () => {
        var todos = [
            {
                id: '1',
                text: 'Walk the dog',
                completed: false,
                timeCompleted: undefined,
                timeCreated: 500
            },
            {
                id: '2',
                text: 'Walk',
                completed: false,
                timeCompleted: undefined,
                timeCreated: 500
            },
            {
                id: '3',
                text: 'Clean the yard.',
                completed: false,
                timeCompleted: undefined,
                timeCreated: 500
            }
        ];

        let store = configureStore.configure({
            todos: todos,
            searchText: 'Walk'
        });
        let provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <DefaultTodoList/>
            </Provider>
        );


        let todoList = TestUtils.scryRenderedComponentsWithType(provider, DefaultTodoList)[0];
        let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, DefaultTodo);

        expect(todosComponents[0].props.id).toBe('1');
        expect(todosComponents[1].props.id).toBe('2');

    });


});