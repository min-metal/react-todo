const axios = require('axios');
const moment = require('moment');
const uuid = require('node-uuid');

export var changeShowCompleted = (completed) => {
    return {
        type: 'CHANGE_SHOW_COMPLETED',
        completed: completed
    }
};
export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};

export var changeSearchText = (searchText) => {
    return {
        type: 'CHANGE_SEARCH_TEXT',
        searchText: searchText
    }
};

export var addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: uuid(),
        text: text,
        completed: false,
        timeCreated: moment().unix(),
        timeCompleted: undefined
    }
};
export var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos: todos
    }
};

export var toggleTodoCompleted = (id) => {
    return {
        type: 'TOGGLE_TODO_COMPLETED',
        id: id,
        time: moment().unix()
    }

};

export var removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        id: id
    }
};

// export var startLocationFetch = () => {
//     return {
//         type: 'START_LOCATION_FETCH'
//     }
// };
// export var completeLocationFetch = (url) => {
//     return {
//         type: 'COMPLETE_LOCATION_FETCH',
//         url: url
//     }
// };
// export var fetchLocation = () => {
//     return (dispatch, getState) => {
//         dispatch(startLocationFetch());
//         axios.get('http://ipinfo.io/')
//             .then((res) => {
//                 var location = res.data.loc;
//                 var baseUrl = 'http://maps.google.com?q=';
//
//                 dispatch(completeLocationFetch(baseUrl + location));
//             })
//             .catch((err) => {
//                 console.error(err);
//             });
//     }
// };