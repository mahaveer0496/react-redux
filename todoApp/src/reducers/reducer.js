import {
   createStore
} from 'redux';

// action types -----
import {
   ADD_TODO,
   DELETE_TODO,
   TOGGLE_TODO,
   SET_VISIBILITY_FILTER
} from './../actions/actionTypes.js';


const
   initialState = {
      visibilityFilter: 'SHOW_ALL',
      todos: [{
            todo: 'Walk the Dog',
            completed: false
         },
         {
            todo: 'Complete Todo App',
            completed: false
         },
         {
            todo: 'Eat Dinner',
            completed: true
         }
      ]
   },
   reducer = (state = initialState, action) => {
      switch (action.type) {

         case ADD_TODO:
            return Object.assign({}, state, {
               todos: [
                  ...state.todos,
                  {
                     todo: action.todo,
                     completed: false
                  }
               ]
            });

         case DELETE_TODO:
            return Object.assign({}, state, {
               todos: [
                  ...state.todos.slice(0, action.index), ...state.todos.slice(action.index + 1)
               ]
            });

         case TOGGLE_TODO:
            return Object.assign({}, state, {
               todos: [
                  ...state.todos.slice(0, action.index),
                  {
                     todo: state.todos[action.index].todo,
                     completed: !state.todos[action.index].completed
                  },
                  ...state.todos.slice(action.index + 1)
               ]
            });

         case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
               visibilityFilter: action.filter
            })

         default:
            return state
      }
   };
export default createStore(reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
