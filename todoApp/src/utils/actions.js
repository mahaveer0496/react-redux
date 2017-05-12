import {
   ADD_TODO,
   DELETE_TODO,
   TOGGLE_TODO,
   SET_VISIBILITY_FILTER
} from './actionTypes';

export const
   addTodoActionCreator = todo => ({
      type: ADD_TODO,
      todo
   }),
   deleteTodoActionCreator = index => ({
      type: DELETE_TODO,
      index
   }),
   toggleTodoActionCreator = index => ({
      type: TOGGLE_TODO,
      index
   }),
   setVisibilityFilterActionCreator = filter => ({
      type: SET_VISIBILITY_FILTER,
      filter
   })
