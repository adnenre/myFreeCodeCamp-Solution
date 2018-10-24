
/*
After an action is created and dispatched, 
the Redux store needs to know how to respond to that action. 
This is the job of a reducer function. 
The reducer is simply a pure function that takes state and action, 
then returns new state.
*/

const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    // change code below this line
    if (action.type === 'LOGIN') {
      return  {
      login: true
      } 
      } else {
        return defaultState
    };
    // change code above this line
  };
  
  const store = Redux.createStore(reducer);
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };