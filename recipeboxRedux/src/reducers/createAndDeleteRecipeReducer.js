import {
   CREATE_RECIPE,
   REMOVE_RECIPE,
   EDIT_RECIPE
} from './../actions/actionTypes';

const recipes = [{
         title: 'Tomato curry',
         ingredients: ['tomato', 'sauce', 'cury']
      },
      {
         title: 'Apple wine',
         ingredients: ['apple', 'cider', 'vinegar']
      },
      {
         title: 'Bread',
         ingredients: ['bread', 'jelly', 'jam']
      }
   ],
   createAndDeleteRecipeReducer = (state = recipes, action) => {
      switch (action.type) {
         case CREATE_RECIPE:
            return [
               ...state, {
                  title: action.title,
                  ingredients: action.ingredients
               }
            ]
         case REMOVE_RECIPE:
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
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
export default createAndDeleteRecipeReducer;