//main_container

function mainContainerWelcome(){
    main_container.innerHTML = "<div id='mctitle'>WELCOME</div>"
    main_container.style.background = "blue"
}

function LoginMainContainer(){
    main_container. innerHTML= ""
    main_container.innerHTML +=
    `<div class="mc-nav" id="mc-nav-div">
        <div id="wd-btn"class="mc-nav-item" data-user-id=${currentUser}>wardrobe</div>
        <div id="current-btn"class="mc-nav-item" data-user-id=${currentUser}>current</div>
        <div id="edit-wd-btn"class="mc-nav-item" data-user-id=${currentUser}>edit wardrobe</div>
    </div>
    <div id="mc-content-space">
    </div>`
    mc_nav_bar = document.getElementById('mc-nav-div')
    mcContent = document.getElementById('mc-content-space')
}

