import {
   createStore
} from 'redux';
import {
   CREATE_RECIPE,
   REMOVE_RECIPE
} from './../actions/actionTypes';

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
         case CREATE_RECIPE:
            return [...state, {
               title: action.title,
               ingredients: action.ingredients
            }];
         case REMOVE_RECIPE:
            return [...state.slice(0,action.index),...state.slice(action.index + 1)]
         default:
            return state;
      }
   },
   store = createStore(reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
global.store = store
export default store;
