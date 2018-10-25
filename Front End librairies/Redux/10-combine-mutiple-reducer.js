
/* Combine Multiple Reducers
      When the state of your app begins to grow more complex, 
    it may be tempting to divide state into multiple pieces.
    Instead, remember the first principle of Redux:
    all app state is held in a single state object in the store.
    Therefore, Redux provides reducer composition as a solution
    for a complex state model. You define multiple reducers to 
    handle different pieces of your application's state, 
    then compose these reducers together into one root reducer. 
    The root reducer is then passed into the Redux createStore() method.
*/

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  auth:authReducer,
  count:counterReducer
}) // define the root reducer here

const store = Redux.createStore(rootReducer);
