const BASE_URL = 'http://localhost:3000/api/v1/users'
//get clothing for a user
function getUserClothing(id){
    fetch(BASE_URL + `/${id}`)
        .then(res => res.json())
        .then(json =>{
            const {clothing_items} = json
            main_container.innerHTML = ""
            clothing_items.forEach(renderClothingItem);
        })
}

const renderClothingItem = function(itemObject){
    const {brand,clothing_type,color} = itemObject
    const itemHTML = `<div>${clothing_type} - ${brand} - ${color}</div>`
    main_container.innerHTML += itemHTML
}