

/**
 * solution by @adnen_rebai
 */

 let user = {
     name : 'Kenneth',
     age :20,
     data:{
         username : 'kennethCodesAllDay',
         joinDate : 'march 26, 2016',
         organization : 'freecodecamp',
         friends:[
             'sam',
             'kira',
             'Tomo'
         ],
         location :{
             city : 'San Francisco',
             state : 'CA',
             country :'USA'
         }
     }
 };

 function addFriend(userObj,friend){
   userObj.data.friends.push(friend);
   return userObj.data.friends;
 }

 console.log(addFriend(user,'Pete'))