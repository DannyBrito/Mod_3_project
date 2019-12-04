const usersUrl = 'http://localhost:3000/api/v1/users';
const dropdownContainer = document.querySelector('div.dropdown');
const myDropdown = document.querySelector('div.my-dropdown');
const dropdownList = document.querySelector('ul.dropdown-list');

document.addEventListener('DOMContentLoaded', function(event){
    fetchUsers(usersUrl);
})

function fetchUsers(usersUrl) {
    fetch(usersUrl) 
    .then(function(response){
        return response.json()
    })
    .then(function(users){
        users.forEach(user => renderUser(user));
    })
}


function renderUser(user) {
    let dropdownList = document.querySelector('ul.dropdown-list');
    userHTML = `
    <li class="user" data-id=${user.id}>${user.username}</li>`;
    dropdownList.insertAdjacentHTML('beforeend', userHTML);
}

dropdownContainer.addEventListener('click', function(event){
    if (event.target.className === 'dropdown-btn') {
        if (myDropdown.style.display === 'none') {
            myDropdown.style.display = 'block'
            let arrow = document.querySelector('span#arrow');
            if (arrow.innerHTML = '&#9660') {
                arrow.innerHTML = '&#9650';
            }  
            dropdownList.addEventListener('click', function(event){
                if (event.target.className === 'user') {
                    currentUser = event.target.dataset.id;
                    console.log(currentUser)
                    //fetch wardrobe;
                }
            })
        } else {
            myDropdown.style.display = 'none';
            arrow.innerHTML = '&#9660';
        }
        
    }
    }
)