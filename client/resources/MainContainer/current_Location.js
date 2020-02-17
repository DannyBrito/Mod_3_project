


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
    let clothingInfoContainer;
    wdResultContainer.addEventListener('mouseover', function(event){
        clothingInfoContainer = event.target.querySelector('.pop-up')
        if (event.target.dataset.id) {
            event.target.style.cursor = 'pointer';
            if (event.target.dataset.id === clothingInfoContainer.dataset.clothing) {
                clothingInfoContainer.style.display = 'block';
            } 
            // move this ( MAYBE ) to a mouseout evnt on wdResultContainer and check that event.target.dataset.id exists or add a classname
            event.target.addEventListener('mouseout', function(){
                // debugger;
                clothingInfoContainer.style.display = 'none';
            })
        }
        
        
    })
    
    
    } else {
        wdResultContainer.innerHTML = "<h1>Get Clothing B </h1>"
    }
    
    

    
}


function addClothingResults(item){
    const {personal_nickname, brand, clothing_type, color, id} = item
    wdResultContainer.innerHTML += `<div data-id=${id}>${personal_nickname} <ul class="pop-up" data-clothing=${id} style="display: none;"><li>${brand}</li> <li>${clothing_type}</li>  <li>${color}</li></ul></div>`
    
}


    //ask danny what wdResultContainer is

        // if (event.target.dataset.id === id) {
        //     console.log('yo')
        // }


// ${brand} - ${clothing_type}