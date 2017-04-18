import { createStore } from 'redux';
import { ADD_TODO, DELETE_TODO } from './actionTypes';


export const addTodoActionCreator = toDo => ({
   type: ADD_TODO,
   toDo
})

export const deleteTodoActionCreator = () => ({
   type: DELETE_TODO
})

export const reducer = (state = [], action) => {
   switch (action.type) {
      case ADD_TODO:
         return state.concat(action.toDo)
      default:
         return state
   }
}

const store = createStore(reducer);
export default store
