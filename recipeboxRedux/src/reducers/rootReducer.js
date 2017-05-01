import {
   createStore
} from 'redux';
import {
   ADD_RECIPE
} from './../actions/actionTypes';
import {
   addRecipeActionCreator
} from './../actions/actions';

const initialState = [{
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
   reducer = (state = initialState, action) => {
      switch (action.type) {
         case ADD_RECIPE:
            return [...state, {
               title: action.title,
               ingredients: action.ingredients
            }];

         default:
            return state;
      }
   },
   store = createStore(reducer);
   global.store = store
   export default store;