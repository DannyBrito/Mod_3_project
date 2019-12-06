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
    if(e.target.localName === 'button') userItemDestroyConnection(e.target.dataset.uciId)
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
    inputs.push(e.target.querySelector('select').value)
    if(inputs.length === 6){

    }
    e.target.reset()
}