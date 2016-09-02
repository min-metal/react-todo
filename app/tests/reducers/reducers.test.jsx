const expect = require('expect');
const moment = require('moment');
const df = require('deep-freeze');

const reducers = require('../../reducers/reducers');


describe('Reducers', () => {
    it('should set search text', () => {
        var action = {
            type: 'CHANGE_SEARCH_TEXT',
            searchText: 'hello'
        };

        let res = reducers.searchTextReducer('', action);

        expect(res).toEqual(action.searchText);
    });

    it('should add existing todos', () => {
        let todos = [{
            id: '1',
            text: 'anything',
            completed: false,
            timeCreated: 500,
            timeCompleted: undefined
        }];

        let action = {
            type: 'ADD_TODOS',
            todos: todos
        };

        let res = reducers.todosReducer(df([]), df(action));
        expect(res).toEqual(todos);
    })


});