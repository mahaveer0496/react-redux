import {
   CREATE_RECIPE,
   REMOVE_RECIPE,
   EDIT_RECIPE,
   GET_INDEX_OF_RECIPE_TO_EDIT
} from './../actions/actionTypes';

const getIndexOfRecipeReducer = (state = null, action) => {
   switch (action.type) {
      case GET_INDEX_OF_RECIPE_TO_EDIT:
         return action.index
      default:
         return state
   }
}
export default getIndexOfRecipeReducer;
