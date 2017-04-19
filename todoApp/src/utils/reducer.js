import { createStore } from 'redux';
import { ADD_TODO, DELETE_TODO } from './actionTypes';


export const addTodoActionCreator = todo => ({
   type: ADD_TODO,
   todo
})

export const deleteTodoActionCreator = (index) => ({
   type: DELETE_TODO,
   index
})

const reducer = (state = [], action) => {
   switch (action.type) {
      case ADD_TODO:
         return state.concat(action.todo)
      case DELETE_TODO:
         return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
      default:
         return state
   }
}

const store = createStore(reducer);
export default store
