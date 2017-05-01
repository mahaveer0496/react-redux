import {
   CREATE_RECIPE,
   REMOVE_RECIPE
} from './actionTypes';

export const createRecipeActionCreator = ({ title, ingredients }) => ({
      type: CREATE_RECIPE,
      title,
      ingredients
   }),
   removeRecipeActionCreator = index => ({
   type: REMOVE_RECIPE,
   index
})
