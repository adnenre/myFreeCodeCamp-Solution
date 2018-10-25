// define ADD, addMessage(), messageReducer(), and store here:

//action type
const ADD = 'ADD';

//action creator
const addMessage = (message) =>{
  return{
    type :ADD,
    message
  }
}

//reducer

const messageReducer = (state=[],action) =>{
   if(action.type =='ADD'){
     return [...state,action.message];
   }else{
     return state
   }
}

//store
const store = Redux.createStore(messageReducer)