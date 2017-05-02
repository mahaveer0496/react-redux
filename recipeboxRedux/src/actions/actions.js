import {
   CREATE_RECIPE,
   REMOVE_RECIPE,
   EDIT_RECIPE,
   GET_INDEX_OF_RECIPE_TO_EDIT
} from './actionTypes';

export const createRecipeActionCreator = ({
      title,
      ingredients
   }) => ({
      type: CREATE_RECIPE,
      title,
      ingredients
   }),
   editRecipeActionCreator = object => ({
      type: EDIT_RECIPE,      
      object
   }),
   getIndexOfRecipeToEditActionCreator = index => ({
      type: GET_INDEX_OF_RECIPE_TO_EDIT,
      index
   }),
   removeRecipeActionCreator = index => ({
      type: REMOVE_RECIPE,
      index
   })
