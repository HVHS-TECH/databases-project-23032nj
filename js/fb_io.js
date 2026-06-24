//Constants
const HTML_OUTPUT = document.getElementById("databaseOutputLogin");

//Variables
let userLoggedIn = false
let userFormSubmitted = false
let userRegistered = false

var userDisplayName;
let userEmail;
let userUID;
let userProfilePicture

let userName;
let userAge;

//Checking the user is logged in
authenticateLogin()

function authenticateLogin() {
    console.log("Logging in user")
    authenticationListner = firebase.auth().onAuthStateChanged(handleLogin)
}

function handleLogin(_user) {
    if (userLoggedIn == false) {
        if (_user) {
            GLOBAL_user = _user;
            console.log("User is logged in")
            userDisplayName = GLOBAL_user.displayName
            userEmail = GLOBAL_user.email
            userUID = GLOBAL_user.uid
            userProfilePicture = GLOBAL_user.photoURL
            console.log(userDisplayName)
            console.log(userEmail)
            console.log(userUID)
            console.log(userProfilePicture)
            userLoggedIn = true
            if (window.location.pathname.endsWith('/game-selection.html')) {
                fb_writeWelcome();
            }
        } else {
            console.log("User is not logged in, logging the user in now")
            popupLogin();
        }
    }
}

function popupLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
        GLOBAL_user = result.user;
        console.log("User is logged in")
        userDisplayName = GLOBAL_user.displayName
        userEmail = GLOBAL_user.email
        userUID = GLOBAL_user.uid
        userProfilePicture = GLOBAL_user.photoURL
        console.log(userDisplayName)
        console.log(userEmail)
        console.log(userUID)
        console.log(userProfilePicture)
        userLoggedIn = true
    })
}

function fb_readError(error) {
    console.log("There was an error reading the message");
    console.error(error);
}


function fb_writeWelcome() {
    HTML_OUTPUT.innerHTML += "<p> Welcome " + userDisplayName + "! <p>"

}