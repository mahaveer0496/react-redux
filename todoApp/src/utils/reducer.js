import { createStore } from 'redux';
import { ADD_TODO, DELETE_TODO, MARK_COMPLETED, SHOW_COMPLETED, SHOW_IN_PROGRESS } from './actionTypes';


export const
   addTodoActionCreator = todo => ({
      type: ADD_TODO,
      completed: false,
      todo
   }),
   deleteTodoActionCreator = index => ({
      type: DELETE_TODO,
      index
   }),
   showCompletedActionCreator = () => ({
      type: SHOW_COMPLETED
   }),
   showInProgressActionCreator = () => ({
      type: SHOW_IN_PROGRESS
   }),
   markCompletedActionCreator = index => ({
      type: MARK_COMPLETED,
      index
   }),
   initialState = [{
      todo: '',
      completed: false
   }],
   reducer = (state = initialState, action) => {
      switch (action.type) {
         case ADD_TODO:
            return state.concat({ todo: action.todo, completed: action.completed })
         case DELETE_TODO:
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
         case MARK_COMPLETED:
            return state.map((val, index) => {
               if (index === action.index) {
                  return { todo: val.todo, completed: true }
               }
               return val
            })
         case SHOW_COMPLETED:
            return state
         case SHOW_IN_PROGRESS:
            return state
         default:
            return state
      }
   },
   store = createStore(reducer);

export default store
