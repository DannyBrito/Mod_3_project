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
    mcContent.innerHTML =
    `<div id="sb-mc-container">
        <form id="w-search-form">
            <label>City:</label><br>
                <input type="text"><br>
            <label>Country:</label><br>
                <select>
                    <option value="">Select Country</option>
                </select><br>
            <input type="submit" value="Search">
        </form>
    </div>`
    weatherForm = document.getElementById('w-search-form')
    selectCountryForm = weatherForm.querySelector('select')
    countryCodesFetch()
    SearchWeatherFormEvent()
}

function countryCodesFetch(){
    fetch(baseUrl + `/country-codes`)
        .then(res => res.json())
        .then(json => {
            for(const key in json){
                optionCountryHtml(key, json[key])
            }
        })
}

function optionCountryHtml(code, countryName){
    selectCountryForm.innerHTML += 
    `<option value=${code.toLowerCase()}>${countryName}</option>`
}

