//usersUrl = 'http://localhost:3000/api/v1/users' --- REFERENCE

const dropdownContainer = document.querySelector('div.dropdown');
const myDropdown = document.querySelector('div.my-dropdown');
// const dropdownList = document.querySelector('ul.dropdown-list');
let dropdownList = document.querySelector('ul.dropdown-list');

function fetchUsersDropDown() {
    fetch(usersUrl) 
    .then(function(response){
        return response.json()
    })
    .then(function(users){
        users.forEach(user => renderUser(user));
    })
}


function renderUser(user) {
    
    userHTML = `
    <li class="user" data-id=${user.id}>${user.username}</li>`;
    dropdownList.insertAdjacentHTML('beforeend', userHTML);
}


