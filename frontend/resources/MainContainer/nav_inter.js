//usersUrl = 'http://localhost:3000/api/v1/users' --- REFERENCE

//get clothing for a user
function getUserClothing(save = false, btFlag = false){

    fetch(usersUrl + `/${currentUser}`)
        .then(res => res.json())
        .then(json =>{
            const {clothing_items} = json
            // use to render wardrove or save it into
            if(save) currentUserClothing = clothing_items

            else{
                mcContent.innerHTML = 
                `<div id="clothing-user-container"></div>
                <div id="new-item-form-cont">
                </div>`
                newClothingItemdiv = document.getElementById('new-item-form-cont')
                if(btFlag) {
                    newClothingItemdiv.innerHTML = 
                `<form id="newItemForm">
                    <label>Nickname:</label>
                    <input type="text">
                    <label>Type:</label>
                    <select id ="typeclothingdropm">
                    </select>
                    <label>Brand:</label>
                    <input type="text">
                    <label>Color:</label>
                    <input type="text">
                    <label>Temperature Min:</label>
                    <input type="number">
                    <label>Temperature Max:</label>
                    <input type="number">
                    <input type="submit" value="Search">
                </form>`
                newItemFormc()
                }
                if (clothing_items.length){
                    clothing_items.forEach(item => renderClothingItem(item, btFlag));
                }
                else{
                    mcContent.innerHTML = "Get clothing B" 
                }
            }
        })
}

//helper method to render one clothing item
const renderClothingItem = function(itemObject, deleteBtnflag = false){
    const {brand,clothing_type,color,personal_nickname,user_item_connection} = itemObject
    let itemHTML;
    if(deleteBtnflag){ itemHTML = `<div> ${personal_nickname}: ${brand} - ${color} <button data-uci-id=${user_item_connection}> ❌ </button> </div>`}
    else{itemHTML = `<div data-uci-id=${user_item_connection}>${personal_nickname}: ${brand} - ${color}</div>`}
    mcContent.querySelector('div#clothing-user-container').innerHTML += itemHTML
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
    </div>
    <div id="wd-result-display"></div>`
    wdResultContainer = document.getElementById('wd-result-display')
    weatherForm = document.getElementById('w-search-form')
    selectCountryForm = weatherForm.querySelector('select')
    countryCodesFetch() // used to populate select country section of form
    SearchWeatherFormEvent() // add an event listener to the form right after created
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

// creating a instance to connect an user with a clothing item
function userItemCreateConnection(user_id,clothing_item_id){
    fetch('http://localhost:3000/api/v1/user_clothing_items',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            user_id,
            clothing_item_id,
        })
    })
    .then(res => res.json())
    .then(json =>console.log(json))
}

function userItemDestroyConnection(id){
    fetch(`http://localhost:3000/api/v1/user_clothing_items/${id}`,{
        method: "DELETE",
        // headers: {
        //     'Content-Type': 'application/json',
        //     Accept: 'application/json'
        // },
    })
    .then(res => res.json())
    .then(json =>{
        getUserClothing(false,true)//render
        getUserClothing(true)// save new clothing inventory
        console.log(json)})
}