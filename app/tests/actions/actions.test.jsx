const expect = require('expect');
const moment = require('moment');

const actions = require('../../actions/actions');


describe('Actions', () => {
   it('should generate search text Action', () => {
       let action = {
           type: 'CHANGE_SEARCH_TEXT',
           searchText: 'hello'
       };
       let res = actions.changeSearchText('hello');

       expect(action).toEqual(res);

   });

    it('should generate ADD_TODO action', () => {
        let time = moment().unix();

        let action = {
            type: 'ADD_TODO',
            todo: {
                id: 'id',
                text: 'Thing',
                completed: false,
                timeCreated: time,
                timeCompleted: undefined
            }
        };
        let res = actions.addTodo('Thing');

        expect(action.todo.text).toEqual(res.text);
        expect(action.todo.timeCompleted).toEqual(res.timeCompleted);

    });

    it('should generate ADD_TODOS action', () => {
        let time = moment().unix();
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
        let res = actions.addTodos(todos);

        expect(action).toEqual(res);

    });

});