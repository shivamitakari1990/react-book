/**
 * Created by mitakars on 2/19/16.
 */

// state is not application state not a global state
//state = null is ES6 feature.
// Reducer returns new state of container/Application.
export default function (state = null, action) {
  console.log('hit to reducer ');
  switch(action.type) {
    case 'BOOK_SELECTED' :
      return action.payload
  }
  return state;
}