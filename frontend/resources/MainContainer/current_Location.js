


function filterUserCloth(weatherObj){
    const {main:{temp}} = weatherObj

    //filter clothing items for temperature conditions
    filteredClothing = currentUserClothing.filter(item =>{
        return (item.temp_min <= temp) && (item.temp_max >= temp)
    })

    //clear results in container
    wdResultContainer.innerHTML = ""

    //callback function to implement each result HTML
    filteredClothing.forEach(addClothingResults);
}

function addClothingResults(item){
    const {personal_nickname, brand, clothing_type} = item
    wdResultContainer.innerHTML += `<div> ${personal_nickname} - ${brand} - ${clothing_type}</div>`
}