import {
   createStore
} from 'redux';
import {
   CREATE_RECIPE,
   REMOVE_RECIPE,
   EDIT_RECIPE,
   GET_INDEX_OF_RECIPE_TO_EDIT
} from './../actions/actionTypes';

const initialState = {
      indexOfRecipeToEdit: null,
      showEditor: false,
      recipes: [{
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
      ]
   },
   reducer = (state = initialState, action) => {
      switch (action.type) {
         case CREATE_RECIPE:
            return Object.assign({}, state, {
               recipes: [
                  ...state.recipes, {
                     title: action.title,
                     ingredients: action.ingredients
                  }
               ]
            });
         case REMOVE_RECIPE:
            return Object.assign({}, state, {
               recipes: [
                  ...state.recipes.slice(0, action.index), ...state.recipes.slice(action.index + 1)
               ]
            });
         case EDIT_RECIPE:
            return Object.assign({}, state, {
               showEditor: false,
               recipes: state.recipes.map((val, ind) => {
                  if (ind === state.indexOfRecipeToEdit) {
                     return {
                        title: action.object.title,
                        ingredients: action.object.ingredients
                     }
                  }
                  return val
               })

            })
         case GET_INDEX_OF_RECIPE_TO_EDIT:
            return Object.assign({}, state, {
               showEditor: true,
               indexOfRecipeToEdit: action.index
            })
         default:
            return state;
      }
   },
   store = createStore(reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//to access store in Console
global.store = store
export default store;