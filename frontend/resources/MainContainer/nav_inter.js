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
    const {brand,clothing_type,color} = itemObject
    const itemHTML = `<div>${clothing_type} - ${brand} - ${color}</div>`
    mcContent.innerHTML += itemHTML
}