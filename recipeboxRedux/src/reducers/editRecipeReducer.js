import {
   CREATE_RECIPE,
   REMOVE_RECIPE,
   EDIT_RECIPE,
   GET_INDEX_OF_RECIPE_TO_EDIT
} from './../actions/actionTypes';

const editRecipeReducer = (state = [], action) => {
   switch (action.type) {
      case EDIT_RECIPE:
         return state.map((val, ind) => {
            if (ind === state.indexOfRecipeToEdit) {
               return {
                  title: action.object.title,
                  ingredients: action.object.ingredients
               }
            }
            return val
         })
      default:
         return state
   }
}
export default editRecipeReducer
