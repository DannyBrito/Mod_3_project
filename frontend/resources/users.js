const usersUrl = 'http://localhost:3000/api/v1/users';

fetch(usersUrl) 
.then(function(response){
   return response.json()
})
.then(function(users){
    console.log(users);
    // users.forEach(user => addUser(user))
})

// function addUser(user) {

// }