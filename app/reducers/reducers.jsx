
// `state` is actually state.showCompleted, it is not the actual state object
// each of these reducers only care about one specific item in our store
export var completedReducer = (state = false, action) => {
    switch (action.type) {
        case 'CHANGE_SHOW_COMPLETED' : {
            return action.completed
        }
        case 'TOGGLE_SHOW_COMPLETED' : {
            return !state
        }
        default: {
            return state;
        }
    }
};

export var searchTextReducer = (searchText = '', action) => {
    switch (action.type) {
        case 'CHANGE_SEARCH_TEXT' : {
            return action.searchText
        }
        default: {
            return searchText;
        }
    }
};

export var todosReducer = (todos = [], action) => {
    switch (action.type) {
        case 'ADD_TODO' : {
            return [...todos, {
                id: action.id,
                text: action.text,
                completed: action.completed,
                timeCreated: action.timeCreated,
                timeCompleted: action.timeCompleted
            }]
        }
        case 'ADD_TODOS' : {
            return [...todos, ...action.todos]
        }

        case 'REMOVE_TODO' : {
            return todos.filter((ele) => ele.id !== action.id);
        }

        case 'TOGGLE_TODO_COMPLETED' : {
            return todos.map((ele) => {
                if(ele.id === action.id) {
                    var nextCompleted = !ele.completed;

                    return {
                        ...ele,
                        completed: nextCompleted,
                        timeCompleted: nextCompleted ? action.time : undefined
                    };
                } else return ele
            })
        }

        default: {
            return todos;
        }
    }
};

// export var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
//     switch (action.type) {
//         case 'START_LOCATION_FETCH' : {
//             return {
//                 isFetching: true,
//                 url: undefined
//             }
//         }
//         case 'COMPLETE_LOCATION_FETCH' : {
//             return {
//                 isFetching: false,
//                 url: action.url
//             }
//         }
//
//         default: {
//             return state;
//         }
//     }
// };