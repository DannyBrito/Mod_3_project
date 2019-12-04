//usersUrl = 'http://localhost:3000/api/v1/users' --- REFERENCE

//get clothing for a user
function getUserClothing(){
    fetch(usersUrl + `/${currentUser}`)
        .then(res => res.json())
        .then(json =>{
            const {clothing_items} = json
            mcContent.innerHTML = ""
            clothing_items.forEach(renderClothingItem);
        })
}

//helper method to render one clothing item
const renderClothingItem = function(itemObject){
    const {brand,clothing_type,color,personal_nickname} = itemObject
    const itemHTML = `<div>${personal_nickname}: ${brand} - ${color}</div>`
    mcContent.innerHTML += itemHTML
}

// change maincontainer-content
const renderSearchWeatherForm = function(){
    mcContent.innerHTML = ""
}
