var expect = require('expect');

var TodoAPI = require('../../api/TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set local storage if valid input', () => {
            var todos = [{id: 'asdf', text: 'hi', completed: false}];
            TodoAPI.setTodos(todos);

            var todosInStorage = JSON.parse(localStorage.getItem('todos'));

            expect(todosInStorage).toEqual(todos);
        });

        it('should not set local storage if invalid input', () => {
            var todos = {wrong: 'wrong'};
            TodoAPI.setTodos(todos);

            var todosInStorage = JSON.parse(localStorage.getItem('todos'));

            expect(todosInStorage).toEqual(null);
        })
    });

    describe('getTodos', () => {
        it('should return valid array if valid input', () => {
            var todos = [{id: 'asdf', text: 'hi', completed: false}];
            localStorage.setItem('todos', JSON.stringify(todos));

            var returned = TodoAPI.getTodos();
            expect(returned).toEqual(todos);
        });

        it('should return empty array if invalid input', () => {
            var todos = {wrong: 'wrong'};
            TodoAPI.setTodos(todos);

            var returned = TodoAPI.getTodos();
            expect(returned).toEqual([]);
        });

    });

    describe('filterTodos', () => {
        var todos = [
            {id: '1', text: 'hi', completed: true},
            {id: '2', text: 'bye', completed: true},
            {id: '3', text: 'k', completed: false},
            {id: '4', text: 'p', completed: false},
        ];

        it('should return all todos if showCompleted is true', () => {
            var returned = TodoAPI.filterTodos(todos, true, '');
            expect(returned.length).toBe(4);
        });

        it('should return non-completed todos if showCompleted is false', () => {
            var returned = TodoAPI.filterTodos(todos, false, '');
            expect(returned.length).toBe(2);
        });

        it('should sort by completed status', () => {
            var returned = TodoAPI.filterTodos(todos, true, '');
            expect(returned[0].completed).toBe(false);
            expect(returned[1].completed).toBe(false);
        });

        it('should filter todos by searchText', () => {
            var returned = TodoAPI.filterTodos(todos, true, 'hi');
            expect(returned).toEqual([{id: '1', text: 'hi', completed: true}]);
        });

        it('should return all todos if searchText is empty', () => {
            var returned = TodoAPI.filterTodos(todos, true, '');
            expect(returned.length).toBe(4);
        })

    })
});