import {
   CREATE_RECIPE,
   REMOVE_RECIPE
} from './actionTypes';

export const addRecipeActionCreator = ({ title, ingredients }) => ({
      type: CREATE_RECIPE,
      title,
      ingredients
   }),
   deleteRecipeActionCreator = index => ({
   type: REMOVE_RECIPE,
   index
})
