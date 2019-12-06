//dropdown menu event lister

dropdownContainer.addEventListener('click', function(event){
    if (event.target.className === 'dropdown-btn') {
        if (myDropdown.style.display === 'none') {
            myDropdown.style.display = 'block'
            let arrow = document.querySelector('span#arrow');
            if (arrow.innerHTML = '&#9660') {
                arrow.innerHTML = '&#9650';
            }  
            dropdownList.addEventListener('click', function(event){
                users = document.querySelectorAll('.user')
                if (event.target.className === 'user') {
                    users.forEach(user => {
                        if (user === event.target) {
                            event.target.style.color = 'blue';
                        } else {
                            user.style.color = 'black';
                        }
                    })
                    
                    currentUser = event.target.dataset.id;
                    LoginMainContainer()
                    mcNavBarEvent()
                }
            })
        } else {
            myDropdown.style.display = 'none';
            arrow.innerHTML = '&#9660';
        }
        
    }
    }
)


function mcNavBarEvent(){
mc_nav_bar.addEventListener('click',function(event){
    mcContent.removeEventListener("click",eventfn) // supposted to remove event listener but 
    mcContent.removeEventListener("click",itemclfn)
    if(event.target.id === "wd-btn"){
        getUserClothing()
    }
    else if(event.target.id === "current-btn"){
        renderSearchWeatherForm()
        getUserClothing(true)
    }
    else if(event.target.id === "edit-wd-btn"){
        getUserClothing(false,true)
        editWardrobeEvent() // add multiple event listeners if spam?
        
    }
})
}

function SearchWeatherFormEvent(){
    weatherForm.addEventListener('submit', e => {
        e.preventDefault()
        const cityInput = e.target.querySelector('input').value
        if(cityInput){
         if(e.target.querySelector('select').value){
             fetchWeather(cityInput, e.target.querySelector('select').value)
        }
        else{
            fetchWeather(cityInput)
        }
        }
        e.target.reset()
    })
}

function editWardrobeEvent(){
    mcContent.addEventListener('click', eventfn)
}

// need to have helper method for event listener to prevent duplicating event-listeners in same element
const eventfn =  e => {
    if(e.target.localName === 'button') {
        if(e.target.dataset.uciId)userItemDestroyConnection(e.target.dataset.uciId)
        else fetchallClothing()
    }
}


function newItemFormc(){
    newItemForm = newClothingItemdiv.querySelector('form')
    clothingTypes.forEach(e =>{
        newItemForm.querySelector('select').innerHTML += `<option value=${e}>${e}</option>`
    })
    newItemFormEventListener()
}

function newItemFormEventListener(){
    newItemForm.addEventListener('submit', newItemfn)
}

const newItemfn = e =>{
    e.preventDefault()
    let inputs =[...e.target.querySelectorAll('input')].map(e => e.value)
    inputs.pop()
    inputs = inputs.filter(i => i.length >= 1)
    console.log(inputs)
    inputs.push(e.target.querySelector('select').value)
    if(inputs.length === 6){
        uciCreatePlusItem(inputs)
    }
    e.target.reset()
}

//fetch POST to create new clothing item and connection with user

function uciCreatePlusItem(inputs){
    const temp ={
        "user_id": currentUser,
        "personal_nickname": inputs[0],
        "brand": inputs[1],
        "color": inputs[2],
        "temp_min": parseInt(inputs[3]),
        "temp_max": parseInt(inputs[4]),
        "clothing_type": inputs[5],
    }
    fetch( uciUrl,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(temp)
    })
        .then(res => res.json())
        .then(json =>{
            getUserClothing(false,true)
            editWardrobeEvent() // add
            console.log(json)
        })
}


//

function fetchallClothing(){
    fetch(clotItemUrl)
    .then(res => res.json())
    .then(json =>{
        mcContent.innerHTML =`Pers. Nickname: <input id="inpt-nuci"></input>`
        json.forEach(renderItemInventory)
        mcContent.removeEventListener("click",eventfn) // delete previous event listener before adding new one
        fullInventoryEvent()
        })
}

const renderItemInventory = function(item){
    const{brand,color,clothing_type} = item
    mcContent.innerHTML +=
    `<div>${clothing_type} - ${color} - ${brand} <button data-clothing-id=${item.id}> ✅</button> </div>`
}

function fullInventoryEvent(){
    mcContent.addEventListener('click', itemclfn)
}

// need to have helper method for event listener to prevent duplicating event-listeners in same element
const itemclfn =  e => {
    e.preventDefault()
    if(e.target.localName === 'button' && mcContent.querySelector('input').value) {
         e.target.style.display = "none" //optimistic render
         userItemCreateConnection(mcContent.querySelector('input').value,e.target.dataset.clothingId)
         mcContent.querySelector('input').value = ""
    }
}

