var $ = require('jquery');

module.exports = {
    setTodos: function (todos) {
        if ($.isArray(todos))
            localStorage.setItem('todos', JSON.stringify(todos));
    },

    getTodos: function () {
        var jsonString = localStorage.getItem('todos');
        var todos = [];
        try {
            todos = JSON.parse(jsonString);
        } catch (e) {
        }

        return $.isArray(todos) ? todos : [];
    },

    filterTodos: function (todoArray, showCompleted, searchText) {
        var filteredTodo = todoArray;

        // filter by show completed
        filteredTodo = filteredTodo.filter((ele, i, array) => {
            return !ele.completed || showCompleted;
        });


        // filter by search text
        if (searchText !== '') {
            filteredTodo = filteredTodo.filter((ele, i, array) => {
                return ele.text.toLowerCase().includes(searchText.toLowerCase());
            });
        }

        // sort todos with non completed first
        filteredTodo.sort((a, b) => {
            if (a.completed && (!b.completed)) {
                return 1;
            } else if ((!a.completed) && b.completed) {
                return -1;
            } else {
                return 0;
            }
        });

        return filteredTodo;

    }
};