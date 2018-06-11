


/**
 * Solution by @adnen_rebai
 */

let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(obj) {
   
   const names = ['Alan','Jeff','Sarah','Ryan'];
    return names.every((name) => name in obj);
  }
  
  console.log(isEveryoneHere(users));