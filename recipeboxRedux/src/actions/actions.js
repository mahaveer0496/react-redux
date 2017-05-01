import {
   ADD_RECIPE,
   DELETE_RECIPE
} from './actionTypes';

export const addRecipeActionCreator = ({ title, ingredients }) => ({
      type: ADD_RECIPE,
      title,
      ingredients
   }),
   deleteRecipeActionCreator = id => ({
   type: DELETE_RECIPE,
   id
})
