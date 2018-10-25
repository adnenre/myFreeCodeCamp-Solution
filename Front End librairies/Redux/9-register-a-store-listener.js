/*
 Another method you have access to on the Redux store object is store.subscribe().
 This allows you to subscribe listener functions to the store,
 which are called whenever an action is dispatched against the store.
*/
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// global count variable:
let count = 0;

// change code below this line
const increment = () => count++;
store.subscribe(increment)
// change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);