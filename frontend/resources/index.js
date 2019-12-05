const user_container = document.getElementById('user-container');
const main_container = document.getElementById('main-container');
const weather_container = document.getElementById('weather-container');

//URLS
const usersUrl = 'http://localhost:3000/api/v1/users';
const baseUrl = 'http://localhost:3000/api/v1';

// const allUsers = new InterntalApi(usersUrl);


//________________________________________________Jack____________________________________________
let currentUser;
let clothingTypes = ['Sweater', 'Shoes', 'Tshirt', 'Socks', 'Light Jacket', 'Heavy Jacket', 'Pants', 'Hat', 'Gloves', 'Accessory', 'Longsleeve'];


//________________________________________________Danny____________________________________________
 let mc_nav_bar;
 let mcContent; // main container for mid div
 let weatherForm; 
 let selectCountryForm;
 let currentUserClothing;
 let wdResultContainer;
 let filteredClothing;
 let newClothingItemdiv;
 let newItemForm;

// ________________________________________________FUNCTION CALLING____________________________________________
    fetchUsersDropDown() // Populate dropdown menu with users
    mainContainerWelcome() // default main container welcome message