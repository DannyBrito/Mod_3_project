


function filterUserCloth(weatherObj){
    const {main:{temp}} = weatherObj

    //filter clothing items for temperature conditions
    filteredClothing = currentUserClothing.filter(item =>{
        return (item.temp_min <= temp) && (item.temp_max >= temp)
    })

    if(filteredClothing.length){
    //clear results in container
    wdResultContainer.innerHTML = ""
    //callback function to implement each result HTML
    filteredClothing.forEach(addClothingResults);
    }
    else{
    wdResultContainer.innerHTML = "<h1>Get Clothing B </h1>"
    }
}

function addClothingResults(item){
    const {personal_nickname, brand, clothing_type} = item
    wdResultContainer.innerHTML += `<div> ${personal_nickname} - ${brand} - ${clothing_type}</div>`
}