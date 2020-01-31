import { getUserName } from './utils.js';

// get form from home page
const userSignUp = document.getElementById('userSignUp');

// get the button from home page
const beginButtonClick = document.getElementById('beginButton');

// add event listener to begin button to take the user to the next page
console.log('hello');

userSignUp.addEventListener('submit', (event) => {
    console.log('hi');
    event.preventDefault();


    // make form data object
    const formData = new FormData(userSignUp);

    // make user
    const userProfile = getUserName(formData);


    

    
    // put user data in local storage
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    
    
    
    // change window on submit
    window.location = '../listPageMap/index.html';

});

